export function controller() {
  this.$onInit = function () {
    console.log(this.todo);
  };

  this.$onChanges = function (changes) {
    if (changes.todo) {
      console.log('change')
      this.todo = angular.copy(this.todo);
    }
  };

  this.removeTodo = function (id) {
    console.log('stateless', id)
    this.onRemove({
      $event: {id}
    })
  };

  this.updateComplete = function (todo) {
    console.log('stateless complete', todo)
    this.onComplete({ $event: {todo} })
  }
}
