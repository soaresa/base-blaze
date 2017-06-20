import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/public-layout/public-layout-controller.js';
import '/imports/ui/pages/home/home-controller.js';

FlowRouter.route('/', {
	name: 'Home',
	action: function () {
        BlazeLayout.render('PublicLayout', { content: 'Home' });
    }
});
