import { NextResponse } from 'next/server'

import { dbConnect } from '../../../lib/mongodb'
import { ContactMessage } from '../../../models/ContactMessage'

type PostBody = {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as PostBody | null
  if (!body) {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const phone = (body.phone ?? '').trim()
  const subject = (body.subject ?? '').trim()
  const message = (body.message ?? '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'name, email, message are required' }, { status: 400 })
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  await dbConnect()
  const doc = await ContactMessage.create({
    name,
    email,
    phone: phone || undefined,
    subject: subject || undefined,
    message,
  })

  return NextResponse.json(
    {
      ok: true,
      id: doc._id.toString(),
    },
    { status: 201 }
  )
}

