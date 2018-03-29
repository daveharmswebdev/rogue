export function taskFactory() {
  var Task = function(data) {
    console.log('task-factory', data);
    this.name = data.name;
    this.completed = data.completed || false;
  }

  Task.prototype.save = function() {
    console.log('saving: ' + this.name);
  }

  Task.prototype.complete = function() {
    this.save();
    console.log('Complete', this.completed);
    this.completed = !this.completed;
  };

  return Task
}
