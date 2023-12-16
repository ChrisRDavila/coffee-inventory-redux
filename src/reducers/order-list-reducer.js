const reducer = (state = {}, action) => {
  const { name, origin, price, roast, bags, id } = action;
  switch (action.type) {
  case 'ADD_ORDER':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        origin: origin,
        price: price,
        roast: roast,
        bags: bags,
        id: id
      }
    });
  default:
    return state;
  }
};

export default reducer;