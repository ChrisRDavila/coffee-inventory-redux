import orderListReducer from '../../reducers/order-list-reducer';

describe('orderListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(orderListReducer({}, { type: null })).toEqual({});
  });
});