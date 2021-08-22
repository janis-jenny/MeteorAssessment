import { CommentsCollection } from '../lib/collection';

const insertComment = (commentText, user) => CommentsCollection.insert({ 
  text: commentText,
  userId: user._id,
  createdAt: new Date(),
});
