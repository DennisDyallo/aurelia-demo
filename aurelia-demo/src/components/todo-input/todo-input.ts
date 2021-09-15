import { bindable } from "aurelia";

export class TodoInput {
  @bindable label: string = "Todo: ";
  @bindable value: string;
}
