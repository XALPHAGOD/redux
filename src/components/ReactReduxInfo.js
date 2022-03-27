export default function ReactRedux() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React-Redux</h1>
      <ul>
        <li>
          React Redux provides a connect function for you to read values from
          the Redux store (and re-read the values when the store updates)
        </li>
        <li>
          mapStateToProps (subscribe to the store) : runs every time the store
          state changes, receives the entire store state, and should return an
          object of data this component needs
        </li>
        <li>
          mapDispatchToProps: this parameter can either be a function, or an
          object
          <ul>
            <li>
              If it’s a function, it will be called once on component creation.
              It will receive dispatch as an argument, and should return an
              object full of functions that use dispatch to dispatch actions
            </li>
            <li>
              If it’s an object full of action creators, each action creator
              will be turned into a prop function that automatically dispatches
              its action when called
            </li>
          </ul>
        </li>
        <li>
          normally do both in one step: connect(mapStateToProps,
          mapDispatchToProps)(Component)
        </li>
        <li>component re-renders: when any field of stateProps is different</li>
      </ul>
    </div>
  );
}
