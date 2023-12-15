import React from "react";
import PropTypes from "prop-types";

function OrderDetail(props){

  const messageStyle = {
    color: 'red'
  }
  const { order, onClickingDelete, onClickingBuy } = props;
  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>{order.name} - {order.origin}</h3>
      <p><em>Price per pound: ${order.price}</em></p>
      <p><em>Roast: {order.roast}</em></p>
      <p><em>In Stock: {order.amount}</em></p>
      <button onClick={ props.onClickingEdit }>Update Inventory</button>
      <button onClick={()=> onClickingDelete(order.id) }>Delete Inventory Entry</button>
      {
        order.amount > 0 ? (
        <button onClick={() => onClickingBuy(order.id)}>Sell 1 pound</button>) : (
          
        <h1 style={messageStyle}>{order.name} is out of stock</h1>)
      }
      <hr/>
    </React.Fragment>
  );
}

OrderDetail.propTypes = {
  order: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default OrderDetail;