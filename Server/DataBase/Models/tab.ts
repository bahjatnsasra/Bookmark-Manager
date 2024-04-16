import { Schema,  model} from 'mongoose';

const tabSchema  = new Schema({
    name : String,
    categories : [{ type: Schema.Types.ObjectId, ref: 'category' }]
})

export const Tab = model("tab", tabSchema) 