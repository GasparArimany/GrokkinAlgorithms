export function generateRandomIntArray(size: number) {
	if (size <= 0) {
		throw new Error("Max value should be greater than zero.");
	}

	const uniqueSet = new Set<number>();

	while (uniqueSet.size < size) {
		const randomNumber = Math.floor(Math.random() * size) + 1;
		if (!uniqueSet.has(randomNumber)) {
			uniqueSet.add(randomNumber);
		}
	}

	return Array.from(uniqueSet.values());
}

export function generateUniqueArray(size: number) {
	if (size <= 0) {
		throw new Error("Max value should be greater than zero.");
	}

	// Generate a sorted array of integers from 1 to max
	const sortedArray = Array.from({ length: size }, (_, i) => i + 1);

	// Shuffle the sorted array
	for (let i = sortedArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
	}

	return sortedArray;
}
