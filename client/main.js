import { Template } from 'meteor/templating';
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

    // Insert a task into the collection
    CommentsCollection.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
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