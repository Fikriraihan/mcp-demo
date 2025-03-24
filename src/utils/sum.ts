/**
 * A utility module for number operations
 * @module sum
 */

/**
 * Adds an array of numbers together
 * @param numbers - Array of numbers to sum
 * @returns The sum of all numbers in the array
 * @throws {Error} If the array is empty
 * @example
 * ```ts
 * sumArray([1, 2, 3]) // returns 6
 * sumArray([]) // throws Error
 * ```
 */
export function sumArray(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error('Cannot sum an empty array');
    }
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Adds two numbers together
 * @param a - First number
 * @param b - Second number
 * @returns Sum of the two numbers
 * @example
 * ```ts
 * sum(5, 3) // returns 8
 * sum(-1, 1) // returns 0
 * ```
 */
export function sum(a: number, b: number): number {
    return a + b;
}

/**
 * Adds multiple numbers together
 * @param numbers - Rest parameter of numbers to sum
 * @returns Sum of all provided numbers
 * @example
 * ```ts
 * sumMany(1, 2, 3, 4) // returns 10
 * sumMany() // returns 0
 * ```
 */
export function sumMany(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}