// import { useState } from "react";
import { connect } from "react-redux";
// import store from "../reduxState";
import {
  addIceCream,
  removeIceCream,
} from "../reduxState/actions/creators/iceCreamActionCreators";
import "../styles/shop.css";

function mSTP(state) {
  return { quantity: state.ice_creams.quantity };
}

function mDTP(dispatchFunc) {
  return {
    aIceCream: () => dispatchFunc(addIceCream()),
    rIceCream: () => dispatchFunc(removeIceCream()),
  };
}

export function IceCream({ quantity, aIceCream, rIceCream }) {
  // const [ice_creams, setIceCreams] = useState(
  //   store.getState().ice_creams.quantity
  // );
  return (
    <div className="shop">
      <h1>Ice Creams</h1>
      {/* <h2>Quantity: {ice_creams}</h2> */}
      <h2>Quantity: {quantity}</h2>
      <div>
        <button
          className="btn"
          // onClick={() => {
          //   store.dispatch(addIceCream());
          //   setIceCreams(store.getState().ice_creams.quantity);
          // }}
          onClick={aIceCream}
        >
          +
        </button>
        <button
          className="btn"
          // onClick={() => {
          //   store.dispatch(removeIceCream());
          //   setIceCreams(store.getState().ice_creams.quantity);
          // }}
          onClick={rIceCream}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default connect(mSTP, mDTP)(IceCream);
