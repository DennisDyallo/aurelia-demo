import { TodoItemModel } from "../../models/TodoItemModel";

export class TodoComponentNew {
  inputValue: string = "";
  todos: TodoItemModel[] = [];

  addTodo(event: KeyboardEvent) {
    if (!this.inputValue || event.key !== "Enter") return;

    this.todos.unshift({ text: this.inputValue, done: false });
    this.inputValue = "";
  }
}
