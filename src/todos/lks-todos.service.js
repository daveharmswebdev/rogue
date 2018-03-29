export class TodosService {
    /*@ngInject*/
    constructor($http) {
      this.$http = $http;
      this._baseUrl = 'http://localhost:3000'
    }

    getTodos() {
      return this.$http.get(this._baseUrl + '/todos');
    }

    removeTodo(id) {
      return this.$http.delete(this._baseUrl + '/todos/' + id);
    }

    addTodo(payload) {
      return this.$http.post(this._baseUrl + '/todos', payload);
    }

    updateComplete(todo) {
      console.log(todo.id, todo.complete);
      const payload = todo;
      return this.$http.put(this._baseUrl + '/todos/' + todo.id, payload)
    }

}
