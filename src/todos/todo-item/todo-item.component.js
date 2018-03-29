import { controller } from './todo-item.controller.js';

export const TodoItem = {
  bindings: {
    todo: '<',
    onRemove: '&',
    onComplete: '&'
  },
  template: require('./todo-item.component.html'),
  controller
}
