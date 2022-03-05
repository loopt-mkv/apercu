import flowRemoveTypes from 'flow-remove-types'
import MagicString from 'magic-string'

const flow = (options = {}) => {
  return {
    name: 'flow',
    transform(code, id) {
      const ms = new MagicString(code)
      const t = flowRemoveTypes(code).toString()
      ms.overwrite(0, code.length, t)
      return {
        code: ms.toString(),
        map: ms.generateMap({ hires: true }),
      }
    },
  }
}

export default flow
