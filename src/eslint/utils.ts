import type { Awaitable, UserConfigItem } from './types.js'

export async function interopDefault<T>(m: Awaitable<T>): Promise<
  T extends {
    default: infer U
  }
    ? U
    : T
> {
  const resolved = await m
  // @ts-expect-error missing types
  return resolved.default || resolved
}
export async function combine(
  ...configs: Awaitable<UserConfigItem | UserConfigItem[]>[]
): Promise<UserConfigItem[]> {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}
export function toArray(value: any) {
  return Array.isArray(value) ? value : [value]
}
