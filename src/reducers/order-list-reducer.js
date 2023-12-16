const reducer = (state = {}, action) => {
  const { name, origin, price, roast, bags, amount, id } = action;
  switch (action.type) {
  case 'ADD_ORDER':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        origin: origin,
        price: price,
        roast: roast,
        bags: bags,
        amount: amount,
        id: id
      }
    });
    case 'DELETE_ORDER':
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default reducer;