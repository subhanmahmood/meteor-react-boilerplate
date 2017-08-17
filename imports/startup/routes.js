import{FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '../ui/layouts/MainLayout';

FlowRouter.route('/', {
  name: 'App_home',
  action(){
    mount(MainLayout, {title: 'Dashboard'})
  }
})
