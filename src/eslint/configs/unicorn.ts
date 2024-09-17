import unicornPlugin from 'eslint-plugin-unicorn'
import { type ConfigWithExtends } from 'typescript-eslint'

/** ESLint configuration object for Unicorn's Rules */
const config: ConfigWithExtends = {
  name: 'Unicorn', // Name of the configuration
  plugins: { '@unicorn': unicornPlugin },
}

export default config
