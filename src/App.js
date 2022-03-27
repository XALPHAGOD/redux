import "./App.css";
import { Provider } from "react-redux";
import store from "./reduxState";

import Intro from "./components/Intro";
import Cake from "./components/Cake";
import IceCream from "./components/Ice_Cream";
import AsyncFetch from "./components/AsyncFetch";
import ReactReduxInfo from "./components/ReactReduxInfo";
import CakeReduxHooks from "./components/CakeReduxHooks";

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: "1rem" }}>
        <Intro />
        <div style={{ display: "flex" }}>
          <Cake />
          <IceCream />
        </div>
        <AsyncFetch />
        <ReactReduxInfo />
        <CakeReduxHooks />
      </div>
    </Provider>
  );
}

export default App;
