import { Meteor } from 'meteor/meteor';
import { CommentsCollection } from '../lib/collection';

const insertComment = commentText => CommentsCollection.insert({ text: commentText });
 
Meteor.startup(() => {
  if (CommentsCollection.find().count() === 0) {
    [
      'First Comment',
      'Second Comment',
      'Third Comment',
    ].forEach(insertComment)
  }
});