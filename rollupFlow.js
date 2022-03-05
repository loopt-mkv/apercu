import flowRemoveTypes from 'flow-remove-types'

const flow = (options = {}) => {
  return {
    name: 'flow',
    transform(code, id) {
      return { code: flowRemoveTypes(code).toString() }
    },
  }
}

export default flow
