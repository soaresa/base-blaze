import { Meteor } from 'meteor/meteor';
import '/imports/startup/client';

//added to solve height 100% problem
BlazeLayout.setRoot('body');

Meteor.startup(function() {
	$('html').attr('lang', 'en-us');
});