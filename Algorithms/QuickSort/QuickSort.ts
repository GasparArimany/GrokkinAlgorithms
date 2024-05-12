export default function Quicksort(array: Array<number>): Array<number> {
	if (array.length < 2) {
		return array;
	}
	const pivot = array[0];
	const lower = [];
	const greater = [];

	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (element === pivot) continue;

		if (element > pivot) {
			greater.push(element);
		} else {
			lower.push(element);
		}
	}

	return [...Quicksort(lower), pivot, ...Quicksort(greater)];
}
