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
    // Prevent default browser form submit
    event.preventDefault();
    console.log(123)

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    CommentsCollection.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().emails[0].address,
    });

    target.text.value = '';
  }
})

Template.comment.events({
  "click .delete"(event) {
    event.preventDefault();
    CommentsCollection.remove(this._id);
    return false
  }
  
})