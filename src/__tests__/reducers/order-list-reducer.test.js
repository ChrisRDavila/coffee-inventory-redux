import orderListReducer from '../../reducers/order-list-reducer';

describe('orderListReducer', () => {

  let action;
  const currentState = {
    1: {
      name: 'Red Eye',
      origin: 'Columbian',
      price: 20,
      roast: 'dark',
      bags: 1,
      id: 1
    }, 2: {
      name: 'Morning Blend',
      origin: 'Malaysian',
      price: 15,
      roast: 'light',
      bags: 1,
      id: 2
    }
  }

  const orderData = {
    name: 'Red Eye',
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
    const { name, origin, price, roast, bags, id } = orderData;
    action = {
      type: 'ADD_ORDER',
      name: name,
      origin: origin,
      price: price,
      roast: roast,
      bags: bags,
      id: id
    };

    expect(orderListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        origin: origin,
        price: price,
        roast: roast,
        bags: bags,
        id: id
      }
    });
  });

  test('#3) Should successfully delete a order', () => {
    action = {
      type: 'DELETE_ORDER',
      id: 1
    };
    expect(orderListReducer(currentState, action)).toEqual({
      2: {
        name: 'Morning Blend',
        origin: 'Malaysian',
        price: 15,
        roast: 'light',
        bags: 1,
        id: 2
      }
    });
  });





});