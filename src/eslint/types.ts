export interface TsOptions {
  typeAwareRules?: boolean
}

function isTsOptions(o?: TsOptions | boolean): o is TsOptions {
  return o !== undefined && typeof o !== 'boolean'
}

export { isTsOptions }
