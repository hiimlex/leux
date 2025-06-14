import { TextAreaSizes } from "../components";
import { getTextAreaRowHeight } from "./getTextAreaRowHeight";

describe("Utils test", () => {
	it("should return the correct height based on row count and size", () => {
		const mockSize = "medium"; // Example size, replace with actual sizes you use
		const mockRows = 3;

		const result = getTextAreaRowHeight(mockRows, mockSize);
		expect(result).toBe("5.25rem"); // Replace '60rem' with the expected result
	});

	it("should return undefined if size is incorrect", () => {
		const result = getTextAreaRowHeight(3, "null" as TextAreaSizes);
		expect(result).toBeUndefined();
	});

	it("should return undefined if row count is 0", () => {
		const result = getTextAreaRowHeight(0, "medium");
		expect(result).toBeUndefined();
	});
});
