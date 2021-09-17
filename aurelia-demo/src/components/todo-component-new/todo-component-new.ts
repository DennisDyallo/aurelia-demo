import { TodoItemModel } from "../../models/TodoItemModel";

export class TodoComponentNew {
  inputValue: string = "";
  todos: TodoItemModel[] = [];

  public get unfinishedCount(): number {
    return this.todos.filter((t) => !t.done).length;
  }

  addTodo(event: KeyboardEvent) {
    if (!this.inputValue || event.key !== "Enter") return;

    this.todos.unshift({ text: this.inputValue, done: false });
    this.inputValue = "";
  }
}
