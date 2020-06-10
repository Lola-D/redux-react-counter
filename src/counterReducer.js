const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADDONE':
      return state + 1;
    case 'REMOVEONE':
      return state - 1;
    case 'ADDTEN':
      return state + 10;
    case 'REMOVETEN':
      return state - 10;
    case 'RESET':
      return state = 0;
    default:
      return state;
  }
}

export default counterReducer