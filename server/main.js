import { Meteor } from 'meteor/meteor';
import { CommentsCollection } from '../lib/collection';

const insertComment = (commentText, user) => CommentsCollection.insert({ 
  text: commentText,
  userId: user._id,
  reatedAt: new Date(),
});
