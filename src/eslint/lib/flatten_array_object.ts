/**
 * Flattens an array of objects into a single object.
 *
 * @param arr - An array of objects to be flattened.
 * @returns A single object that combines all properties from the input array.
 */
export default function flattenArrayObject<T>(arr: T[]): T {
  return arr.reduce(function (result, current) {
    return Object.assign(result, current)
  }, {}) as T
}
