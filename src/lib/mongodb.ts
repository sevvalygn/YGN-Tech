import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

type MongooseCache = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoose: MongooseCache | undefined
}

const globalForMongoose = globalThis as typeof globalThis & { _mongoose?: MongooseCache }

const cached: MongooseCache = globalForMongoose._mongoose ?? { conn: null, promise: null }
globalForMongoose._mongoose = cached

export async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error('Missing environment variable: MONGODB_URI')
  }
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((m) => m)
  }

  cached.conn = await cached.promise
  return cached.conn
}

