import { bindable } from "aurelia";

export class TodoInputClear {
  @bindable value: string;
  @bindable label: string = "Todo: ";

  clearValue() {
    this.value = "";
  }
}
