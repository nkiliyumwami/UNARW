import mongoose from 'mongoose'

// const NEXT_PUBLIC_MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI  

if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
  throw new Error(
    'Please define the NEXT_PUBLIC_MONGODB_URI environment variable inside .env.local'
  )
}


async function dbConnect() {
  let connect
  try {
    connect = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI||'', {})
    console.log(
      'Database connected',
      connect.connection.host,
      connect.connection.name
    )
  } catch (err) {
    console.log('error', err)
    process.exit(1)
  }
  return connect
}

export default dbConnect;


