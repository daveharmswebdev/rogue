// routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

export function routing ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);

  const helloState = {
    name: 'hello',
    url: '/',
    template: require('./home/home.html'),
    controller: 'homeCtrl as ctrl'
  };

  const aboutState = {
    name: 'about',
    url: '/about',
    component: 'lkqAbout'
  };

  const todosState = {
    name: 'todos',
    url: '/todos',
    component: 'lkqTodos'
  };

  const taskState = {
    name: 'task',
    url: '/task',
    component: 'tasks'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(todosState);
  $stateProvider.state(taskState);
  $urlRouterProvider.otherwise('/');
}
