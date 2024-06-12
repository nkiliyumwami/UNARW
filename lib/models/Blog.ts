import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IBlog extends Document {
  title: string
  picture: string
  description: string
  date: Date
  location: string
}

const BlogSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
})

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema)

export default Blog
