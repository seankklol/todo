import { Schema, model, models}  from 'mongoose';

// this is a shema for 
const postSchema = new Schema({
    msg: {
        type: String, 
        required: true
    }
}, {timestamps: true});

// this variable is a defined mongoose model 
// models.post the status of the model (if it is already defined)
// model('Post', postSchema) creates a new model if it is not defined (the 'Post' is the name of the model and postSchema is the schema[structure] of the model)
const PostModel = models.Post || model('Post', postSchema);


export default PostModel;