import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { CommentsCollection } from '../lib/collection';
import './main.html';

Template.mainContainer.helpers({
  comments() {
    return CommentsCollection.find({}, { sort: { createdAt: -1 } });
  }
});

Template.form.events({
  "submit .add-form"(event) {
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;

    Meteor.call('comments.insert', text);

    target.text.value = '';
  }
})

Template.comment.events({
  "click .delete"(event) {
    event.preventDefault();
    Meteor.call('comments.remove', this);
    return false
  }
  
})