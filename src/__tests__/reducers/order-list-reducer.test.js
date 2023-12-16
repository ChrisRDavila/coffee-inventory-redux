import orderListReducer from '../../reducers/order-list-reducer';

describe('orderListReducer', () => {

  let action;
  const orderData = {
    names: 'Red Eye',
    origin: 'Columbian',
    price: 20,
    roast: 'dark',
    bags: 1,
    id: 1
  };

  test('#1) Should return default state if there is no action type passed into the reducer', () => {
    expect(orderListReducer({}, { type: null })).toEqual({});
  });

  test('#2) Should successfully add new order data to mainOrderList', () => {
    const { names, origin, price, roast, bags, id } = orderData;
    action = {
      type: 'ADD_ORDER',
      names: names,
      origin: origin,
      price: price,
      roast: roast,
      bags: bags,
      id: id
    };

    expect(orderListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        origin: origin,
        price: price,
        roast: roast,
        bags: bags,
        id: id
      }
    });
  });


});