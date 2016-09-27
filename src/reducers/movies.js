const movies = (state = [], action) => {
  switch (action.type) {
    const index = action.index
    case 'ADD_MOVIE':
      return [...state, {
        statechangedprop: true,
        data: action.data
      }]
      break;
    default:
      return state;
  }
  console.log(state);
  console.log(action);
}

export default movies
