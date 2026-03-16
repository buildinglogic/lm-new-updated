import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const form      = await req.formData()
    const firstName = form.get('firstName') as string
    const lastName  = form.get('lastName')  as string
    const email     = form.get('email')     as string
    const phone     = form.get('phone')     as string
    const position  = form.get('position')  as string
    const startDate = form.get('startDate') as string
    const cvLink    = form.get('cvLink')    as string
    const resume    = form.get('resume')    as File | null

    const fullName = `${firstName} ${lastName}`.trim()

    // 1. Upload resume to Supabase Storage (if provided)
    let resumeUrl: string | null = null
    if (resume && resume.size > 0) {
      const ext      = resume.name.split('.').pop()
      const path     = `${Date.now()}-${firstName}-${lastName}.${ext}`
      const buf      = Buffer.from(await resume.arrayBuffer())

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(path, buf, { contentType: resume.type, upsert: false })

      if (uploadError) {
        console.error('[careers] Storage upload error:', uploadError.message)
      } else {
        const { data } = supabase.storage.from('resumes').getPublicUrl(path)
        resumeUrl = data.publicUrl
      }
    }

    // 2. Save application to Supabase DB
    const { error: dbError } = await supabase
      .from('job_applications')
      .insert({
        first_name: firstName,
        last_name:  lastName,
        email,
        phone,
        position,
        start_date: startDate || null,
        cv_link:    cvLink    || null,
        resume_url: resumeUrl,
      })

    if (dbError) console.error('[careers] DB error:', dbError.message)

    // 3. Notify support (with resume link)
    await resend.emails.send({
      from: 'support@liquidmind.ai',
      to:   'support@liquidmind.ai',
      subject: `Application — ${position} — ${fullName}`,
      html: `
        <h2>New Job Application</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><b>Name</b></td><td>${fullName}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone || '—'}</td></tr>
          <tr><td><b>Position</b></td><td>${position}</td></tr>
          <tr><td><b>Start Date</b></td><td>${startDate || '—'}</td></tr>
          <tr><td><b>CV / LinkedIn</b></td><td>${cvLink ? `<a href="${cvLink}">${cvLink}</a>` : '—'}</td></tr>
          <tr><td><b>Resume</b></td><td>${resumeUrl ? `<a href="${resumeUrl}">Download Resume</a>` : 'Not uploaded'}</td></tr>
        </table>
      `,
    })

    // 4. Confirmation to applicant
    await resend.emails.send({
      from: 'support@liquidmind.ai',
      to:   email,
      subject: 'Application received — Liquidmind',
      html: `
        <p>Hi ${firstName},</p>
        <p>We've received your application for <b>${position}</b> at Liquidmind.</p>
        <p>If your profile is a strong match, we'll reach out within <b>7 days</b>.</p>
        <p>Thank you for your interest in building the future of trade compliance with us.</p>
        <p>— Team Liquidmind</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[careers]', err)
    return NextResponse.json({ ok: false, error: 'Failed to process request' }, { status: 500 })
  }
}
