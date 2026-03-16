import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, location } = await req.json()

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('demo_leads')
      .insert({ name, email, company, phone, location })

    if (dbError) console.error('[book-demo] DB error:', dbError.message)

    // 2. Notify Naveen
    await resend.emails.send({
      from: 'support@liquidmind.ai',
      to:   'support@liquidmind.ai',
      subject: `New demo request — ${name}`,
      html: `
        <h2>New Demo Request</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Company</b></td><td>${company}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone}</td></tr>
          <tr><td><b>Location</b></td><td>${location || '—'}</td></tr>
        </table>
      `,
    })

    // 3. Confirmation to user
    await resend.emails.send({
      from: 'support@liquidmind.ai',
      to:   email,
      subject: 'Your Liquidmind demo request is received',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for requesting a personalised demo of <b>TradeSync AI</b>.</p>
        <p>Our team will reach out within <b>24 hours</b> to confirm your slot.</p>
        <p>Questions? Write to us at <a href="mailto:support@liquidmind.ai">support@liquidmind.ai</a>.</p>
        <p>— Naveen, Liquidmind</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[book-demo]', err)
    return NextResponse.json({ ok: false, error: 'Failed to process request' }, { status: 500 })
  }
}
