import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IProgram extends Document {
  name: string
  description: string
}

const ProgramSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
})

const Program: Model<IProgram> =
  mongoose.models.Program || mongoose.model<IProgram>('Program', ProgramSchema)

export default Program
