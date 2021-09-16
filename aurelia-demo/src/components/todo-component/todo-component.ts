import { TodoItemModel } from "../../models/TodoItemModel";

export class TodoComponent {
  inputValue: string;
  todos: TodoItemModel[] = [];

  addTodo() {
    if (!this.inputValue) return;

    this.todos.unshift({ text: this.inputValue, done: false });
    this.inputValue = "";
  }

  markDone(item: TodoItemModel) {
    item.done = true;
  }
}