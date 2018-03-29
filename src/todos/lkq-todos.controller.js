export class controller {

  constructor(TodosService) {
    this.newTodo = '';
    this.todos = [];
    this.title = 'Todos'
    this.todosService = TodosService;
  }

  $onInit() {
    this.todosService.getTodos()
      .then(response => {
        this.todos = response.data;
        console.log(this.todos);
      })
  }

  addTodo() {
    console.log('click!', this.newTodo);
    this.newTodo = '';
  }

  removeTodo({id}) {
    console.log(id);
    this.todosService.removeTodo(id)
    .then(() => {
      const newTodos = this.todos.filter(t => t.id != id);
      this.todos = newTodos;
    });
  }

  addTodo(newTodo) {
    const payload = {
      todo: this.newTodo,
      complete: false
    }
    console.log(payload);
    this.todosService.addTodo(payload)
    .then((response) => {
      this.newTodo = '';
      this.todos = [...this.todos, response.data];
    });
  }

  updateComplete(todo) {
    console.log('controller', todo);
    this.todosService.updateComplete(todo.todo)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log('error', error)
      const idx = this.todos.map(t => t.id).indexOf(todo.todo.id);
      todo.todo.complete = !todo.todo.complete;
      this.todos[idx] = todo.todo;
    })
  }
}
