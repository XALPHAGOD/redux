export default function I() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Redux</h1>
      <h3>
        <ul>
          <li>
            Store: Application State (Single Object managed by Redux Store)
          </li>
          <li>
            Action: To Change the Application State (Object with type property
            and payload containing additional data)
          </li>
          <li>
            Reducer: Executing the Changes in State depending on Action
            (function with prevState and action as input parameters and returns
            newModifiedState)
          </li>
        </ul>
        With a plain basic Redux store, you can only do simple synchronous
        updates by dispatching an action. Middleware extends the store's
        abilities, and lets you write async logic that interacts with the store.
      </h3>
    </>
  );
}
