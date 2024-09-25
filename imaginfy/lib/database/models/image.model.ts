import { model, models, Schema } from "mongoose";

export interface IImage extends Document{
    title: string; // required
    transformationType: string; // required
    publicId: string; // required
    secureUrl: URL; // required
    width?: number; // optional
    height?: number; // optional
    config?: object; // optional
    transformationUrl?: URL; // optional
    aspectRatio?: string; // optional
    color?: string; // optional
    prompt?: string; // optional
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }; // reference to User (optional if ObjectId is nullable)
    createdAt?: Date; // optional, default is current date
    updatedAt?: Date; // optional, default is current date
}
  

const ImageSchema = new Schema({
    title: {type:String, requried: true},
    transformationType: {type:String, required:true},
    publicId: {type:String, required:true},
    secureUrl: {type:URL, required:true},
    width: {type:Number},
    height: {type:Number},
    config: {type:Object},
    transformationUrl: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type:Date, default: Date.now},
    updateAt: {type:Date, default: Date.now},
});


const Image = models?.Image || model('Image', ImageSchema);

export default Image;