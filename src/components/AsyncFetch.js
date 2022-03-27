import { useState } from "react";
import store from "../reduxState";
import { startFetch } from "../reduxState/actions/creators/asyncFetchActionCreators";

export default function AsyncFetch() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Async Fetch using Redux-Thunk</h1>
      <h5>Use: https://jsonplaceholder.typicode.com/users</h5>
      <input
        type="text"
        name="url"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ marginBottom: "1rem", width: "25rem", textAlign: "center" }}
      />
      <button
        type="submit"
        onClick={() => {
          store.subscribe(() => setData(store.getState().async_fetch.data));
          store.dispatch(startFetch(url));
        }}
      >
        Fetch
      </button>
      <div>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>
              {item?.name}
              {"   "}||{"   "}
              {item?.username}
              {"   "}||{"   "}
              {item?.email}
              {"   "}||{"   "}
              {item?.website}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
