import { expect, test } from "vitest";
import { Clock } from "./helper/time";
import { Foo } from "../src/Foo";

test("zero time", () => {
	const clock = new Clock();

	// instantiate Foo
	const foo = new Foo();
	expect(foo.isInitialized, "Foo correnctly instantiated").toBe(false);

	// advance time to 99ms and check if Foo is not initialized
	clock.advanceTimeTo(99);
	expect(foo.isInitialized, "Foo not initialized yet").toBe(false);

	// advance time to 100ms and check if Foo is initialized
	clock.advanceTimeTo(100);
	expect(foo.isInitialized, "Foo initialized").toBe(true);
});
