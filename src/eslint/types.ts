export interface TsOptions {
  typeAwareRules?: boolean
}

function isTsOptions(o: any): o is TsOptions {
  return 'typeAwareRules' in o
}

export { isTsOptions }
