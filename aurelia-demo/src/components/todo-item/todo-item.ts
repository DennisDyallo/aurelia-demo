import { bindable } from "aurelia";
import { TodoItemModel } from "../../models/TodoItemModel";

export class TodoItem {
  @bindable item: TodoItemModel;

  markDone() {
    this.item.done = true;
  }
}
