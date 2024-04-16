import { Schema,  model} from 'mongoose';

const bookmarkSchema  = new Schema({
    name : String,
    link : String,
    logo : String,
    category: { type: Schema.Types.ObjectId, ref: 'category' },
})

export const Bookmark = model("bookmark", bookmarkSchema) 