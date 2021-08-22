import { Template } from 'meteor/templating';
import { CommentsCollection } from '../lib/collection';
import './main.html';

Template.mainContainer.helpers({
  comments() {
    return CommentsCollection.find({});
  }
});