import { useSelector, useDispatch } from "react-redux";
import {
  addCake,
  removeCake,
} from "../reduxState/actions/creators/cakeActionCreators";
import "../styles/shop.css";

export default function CRH() {
  const quantity = useSelector((state) => state.cakes.quantity); //extract data from the Redux store state, using a selector function
  const dispatch = useDispatch(); //returns reference to dispatch function from redux store
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Redux Hooks</h1>
      <div>
        <h2 style={{ textAlign: "center" }}>Cakes</h2>
        <h3 style={{ textAlign: "center" }}>Quantity: {quantity}</h3>
        <div>
          <button className="btn" onClick={() => dispatch(addCake())}>
            +
          </button>
          <button className="btn" onClick={() => dispatch(removeCake())}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}
