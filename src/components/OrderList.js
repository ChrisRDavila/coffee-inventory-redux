import React from "react";
import Order from "./Order";
import PropTypes from "prop-types";

function OrderList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.orderList).map((order) =>
        <Order
          whenOrderClicked = { props.onOrderSelection }
          name={order.name}
          origin={order.origin}
          price={order.price}
          roast={order.roast}
          amount={order.amount}
          bags={order.bags}
          id={order.id}
          key={order.id}/>
      )}
    </React.Fragment>
  );
}

OrderList.propTypes = {
  orderList: PropTypes.object,
  onOrderSelection: PropTypes.func
};

export default OrderList;