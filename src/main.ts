import {Generator} from "./generator";
import initMirage from "./service/mirage";
import {App} from "./App";

initMirage();

// new Generator().startRouting();
const generator = new Generator();
const app = new App(generator);
