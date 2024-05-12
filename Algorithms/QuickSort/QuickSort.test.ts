import { describe, test, expect } from "bun:test";
import Quicksort from "./QuickSort";

describe("Quicksort", () => {
	test("Works correctly", () => {
		// arrange
		const array = [9, 3, 4, 1, 7, 5];
		// act
		const sorted = Quicksort(array);
		// assert
		expect(sorted[0]).toBe(1);
		expect(sorted[1]).toBe(3);
		expect(sorted[2]).toBe(4);
		expect(sorted[3]).toBe(5);
		expect(sorted[4]).toBe(7);
		expect(sorted[5]).toBe(9);
	});
});
