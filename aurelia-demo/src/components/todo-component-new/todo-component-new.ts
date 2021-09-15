import { TodoItemModel } from "../../models/TodoItemModel";

export class TodoComponentNew {
  inputValue: string;
  todos: TodoItemModel[] = [];

  addTodo(event?: KeyboardEvent) {
    if (event && event.key === "Enter") {
      this.todos.unshift({ text: this.inputValue, done: false });
      this.inputValue = "";
    }

    return true;
  }
}
