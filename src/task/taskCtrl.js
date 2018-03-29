/* @ngInject */

export class taskCtrl {

  constructor(Task, UrgentTask) {
    this.task = Task,
    this.urgentTask = UrgentTask
  }

  $onInit() {
    this.name = 'Task';
    this.tasks = [
      new this.task({name: 'walk dogs', completed: true}),
      new this.task({name: 'walk cats', completed: true}),
      new this.urgentTask({name: 'walk people', completed: true}, 1),
      new this.task({name: 'walk trucks', completed: true}),
    ]
  }
}
