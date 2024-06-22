import { GLOB_EXCLUDE } from '../globs.js'

export async function ignores() {
  return [{ ignores: GLOB_EXCLUDE }]
}
