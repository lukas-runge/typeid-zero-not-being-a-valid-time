import { typeid } from "typeid-js";

export class Foo {
	id = typeid("foo").toString();

	isInitialized = false;

	constructor() {
		setTimeout(() => (this.isInitialized = true), 100);
	}
}
