const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      const index = action.index
      return [...state, {
        statechangedprop: true,
        data: action.data,
        index
      }]
    default:
      return state;
  }
}

export default movies
