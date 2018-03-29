import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap';

import './assets/scss/app.scss';

import { homeCtrl } from './home/homeCtrl';
import { routing } from './app.routing';

import { LkqAbout } from './about/lkq-about.component';
import { LkqNavbar } from './navbar/lkq-navbar.component';
import { LkqFooter } from './footer/lkq-footer.component';
import { TodoModule } from './todos/lkq-todos.module';
import { taskFactory } from './task/task.factory';
import { urgentTaskFactory } from './task/urgentTask.factory';
import { Tasks } from './task/tasks.component';

// app
angular.module('app', [uiRouter, TodoModule]);

// routing
angular.module('app').config(routing);

// home page
angular.module('app').controller('homeCtrl', homeCtrl);

// tasks
angular.module('app').component('tasks', Tasks);
angular.module('app').factory('Task', taskFactory);
angular.module('app').factory('UrgentTask', urgentTaskFactory);

angular.module('app').component('lkqAbout', LkqAbout);

// nav and footer components
angular.module('app').component('lkqNavbar', LkqNavbar);
angular.module('app').component('lkqFooter', LkqFooter);
