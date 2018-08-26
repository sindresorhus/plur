/**
 * Returns the plural form of a word.
 *
 * @param word - Word to pluralize.
 * @param plural - Pluralized word. The plural suffix will match the case of the last letter in the word.
 * @param count - Count to determine whether to use singular or plural.
 * @returns Plural form of the word.
 */
export default function plur(
	word: string,
	plural: string | number,
	count?: number
): string;
