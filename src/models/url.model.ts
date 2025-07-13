import { Schema, model, ObjectId } from "mongoose";

export interface IUrl {
  _id: ObjectId;
  urlKey: string;
  redirectUrl: string;
  visitCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const UrlSchema = new Schema<IUrl>(
  {
    urlKey: {
      type: String,
      required: [true, "Short URL required"],
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: [true, "Long URL required"],
    },
    visitCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Url = model<IUrl>("Url", UrlSchema);

export default Url;
