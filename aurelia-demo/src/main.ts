import Aurelia from "aurelia";
import { MyApp } from "./my-app";

import * as components from "./components";

Aurelia.register(components).app(MyApp).start();
