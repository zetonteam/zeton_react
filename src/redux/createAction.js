const createAction = (type, payloadCreator, metaCreator) => Object.assign(
  (...args) => ({
    type,
    ...({
      payload: (typeof payloadCreator == 'function' && payloadCreator(...args)) || args[0]
    }),
    ...(typeof metaCreator == 'function' && { meta: metaCreator(...args) })
  }),
  { toString: () => type }
)

export default createAction
