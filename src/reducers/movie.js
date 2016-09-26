function movieAdd(state = [], action){
  switch (action.type) {
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
