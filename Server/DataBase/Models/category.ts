import { Schema,  model} from 'mongoose';

const categorySchema  = new Schema({
    name : String,
    tab : { type: Schema.Types.ObjectId, ref: 'tab' },
    bookmarks : [{ type: Schema.Types.ObjectId, ref: 'bookmark' }]
})

export const Category = model("category", categorySchema) 