import { Meteor } from 'meteor/meteor';
import { CommentsCollection } from '../lib/collection';

const insertComment = (commentText, user) => CommentsCollection.insert({ 
  text: commentText,
  userId: user._id,
  createdAt: new Date(),
});

Meteor.startup(() => {
  if (CommentsCollection.find().count() === 0) {
    [
      'First Comment',
      'Second Comment',
      'Third Comment',
    ].forEach(insertComment)
  }
});