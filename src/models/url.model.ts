import { Schema, model, ObjectId } from "mongoose";

export interface IUrl {
  _id: ObjectId;
  urlKey: string;
  redirectUrl: string;
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
  },
  {
    timestamps: true,
  }
);

const Url = model<IUrl>("Url", UrlSchema);

export default Url;
