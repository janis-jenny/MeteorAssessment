/* import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
}); */
import './main.html';

Template.mainContainer.helpers({
  comments: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});