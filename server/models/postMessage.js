import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  /* what is a schema in mongoose?
      You can create documents that look absolutely different in mongoose
      We're going to create a model for our data which will be sent in CRUD requests
  */
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;