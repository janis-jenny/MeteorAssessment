import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const CommentsCollection = new Mongo.Collection('comments');

Meteor.methods({
  'comments.insert'(text) {
    check(text, String);
 
    if (!Meteor.userId()) {
      throw new Meteor.Error('Not authorized.');
    }
 
    CommentsCollection.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().emails[0].address,
    })
  },
  'comments.remove'(comment) {
    check(comment._id, String);
    if (comment.owner !== Meteor.userId()) {
      throw new Meteor.Error('Not authorized.');
    }
    CommentsCollection.remove(comment._id)
  },
})
