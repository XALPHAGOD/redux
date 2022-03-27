import { useState } from "react";
import { connect } from "react-redux";
// import store from "../reduxState";
import {
  addCake,
  removeCake,
} from "../reduxState/actions/creators/cakeActionCreators";
import "../styles/shop.css";

function matchStateToProps(state, defaultProps) {
  //defProps passed from parent Component
  //via react-redux
  //function could be any name
  // console.log(state);
  return { quantity: state.cakes.quantity, defaultProps };
}

function matchDispatchToProps(dispatch) {
  //via react-redux
  //function name could be anything
  return {
    bCake: (qty) => dispatch(addCake(qty)), //event obj might get passed as parameter to qty by mistake
    rCake: () => dispatch(removeCake()),
  };
}

export function Cake(props) {
  // console.log(props);
  // const [cakes, setCakes] = useState(store.getState().cakes.quantity); //via redux
  const [user_inp, setUserInp] = useState(0);
  return (
    <div className="shop">
      <h1>Cakes</h1>
      {/* <h2>Quantity: {cakes}</h2> */}
      <h2>Quantity: {props.quantity}</h2>
      <div>
        <button
          className="btn"
          // onClick={() => {
          //   store.dispatch(addCake());
          //   setCakes(store.getState().cakes.quantity);
          // }}
          //see for decrease button onClick
          onClick={() => props.bCake()} //if not event object gets passed as parameter to qty
        >
          +
        </button>
        <button
          className="btn"
          // onClick={() => {
          //   store.dispatch(removeCake());
          //   setCakes(store.getState().cakes.quantity);
          // }}
          onClick={props.rCake}
        >
          -
        </button>
      </div>
      <label htmlFor="user_inp">Set Quantity</label>
      <div
        style={{
          width: "50%",
          marginTop: "0.5rem",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <input
          type="number"
          name="user_inp"
          id="user_inp"
          style={{ width: "10rem" }}
          value={user_inp}
          onChange={(e) => setUserInp(e.target.value)}
          style={{ textAlign: "center" }}
        />
        <button
          style={{ position: "absolute", right: "2rem" }}
          onClick={() => {
            props.bCake(user_inp);
            setUserInp(0);
          }}
        >
          ✔
        </button>
      </div>
    </div>
  );
}

export default connect(matchStateToProps, matchDispatchToProps)(Cake);
