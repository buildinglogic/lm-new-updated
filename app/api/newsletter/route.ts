import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, role } = await req.json()

    // 1. Upsert into Supabase (handles duplicate emails gracefully)
    const { error: dbError } = await supabase
      .from('newsletter_subscribers')
      .upsert({ email, role: role || null }, { onConflict: 'email' })

    if (dbError) console.error('[newsletter] DB error:', dbError.message)

    // 2. Add to Resend Audience (optional — only if RESEND_AUDIENCE_ID is set)
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId:   process.env.RESEND_AUDIENCE_ID,
        unsubscribed: false,
      })
    }

    // 3. Notify support
    await resend.emails.send({
      from: 'support@liquidmind.ai',
      to:   'support@liquidmind.ai',
      subject: `Newsletter signup — ${email}`,
      html: `
        <p><b>${email}</b> just subscribed to the newsletter.</p>
        ${role ? `<p>Role: <b>${role}</b></p>` : ''}
      `,
    })

    // 4. Welcome email to subscriber
    await resend.emails.send({
      from: 'support@liquidmind.ai',
      to:   email,
      subject: "You're in — Liquidmind Trade Insights",
      html: `
        <p>Hi there,</p>
        <p>You're now subscribed to the <b>Liquidmind Trade Compliance Newsletter</b>.</p>
        <p>Every week you'll get:</p>
        <ul>
          <li>Trade compliance insights</li>
          <li>HSN code updates &amp; tariff changes</li>
          <li>Tips to maximise Drawback &amp; RoDTEP refunds</li>
          <li>DGFT policy announcements</li>
        </ul>
        <p>No spam. Unsubscribe anytime.</p>
        <p>— Team Liquidmind</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[newsletter]', err)
    return NextResponse.json({ ok: false, error: 'Failed to process request' }, { status: 500 })
  }
}
