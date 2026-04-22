import mongoose, { Schema } from 'mongoose'

export type ContactMessageDocument = mongoose.Document & {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  createdAt: Date
  updatedAt: Date
}

const ContactMessageSchema = new Schema<ContactMessageDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: false, trim: true },
    subject: { type: String, required: false, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
)

export const ContactMessage =
  (mongoose.models.ContactMessage as mongoose.Model<ContactMessageDocument>) ||
  mongoose.model<ContactMessageDocument>('ContactMessage', ContactMessageSchema)

