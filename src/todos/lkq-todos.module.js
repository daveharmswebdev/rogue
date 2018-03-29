import angular from 'angular';
import { LkqTodos } from './lkq-todos.component';
import { TodosService } from './lks-todos.service';
import { TodoItem } from './todo-item/todo-item.component'

export const TodoModule = angular
  .module('TodoModule', [])
  .component('lkqTodos', LkqTodos)
  .component('todoItem', TodoItem)
  .service('TodosService', TodosService)
  .name
