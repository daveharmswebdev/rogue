export function urgentTaskFactory(Task) {
  let UrgentTask = function(data, priority) {
    console.log(data);
    Task.call(this, data);
    this.priority = priority;
  }

  UrgentTask.prototype = Object.create(Task.prototype);

  UrgentTask.prototype.notify = function() {
    console.log('notifying important people');
  }

  UrgentTask.prototype.save = function() {
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);
  }

  return UrgentTask;
}
