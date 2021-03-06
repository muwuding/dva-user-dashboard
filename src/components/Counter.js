import React from "react";
import { Button } from "antd";
import styles from "./Counter.css";

function Counter({ count, dispatch }) {
  function countUpHandler(count) {
    if (count < 20) {
      dispatch({ type: "counter/countUp" });
    }
  }
  function countDownHandler(count) {
    if (count > 0) {
      dispatch({ type: "counter/countDown" });
    }
  }

  return (
    <div className={styles.normal}>
      <Button onClick={countUpHandler.bind(null, count)}>增加</Button>
      <strong>{count}</strong>
      <Button onClick={countDownHandler.bind(null, count)}>减少</Button>
    </div>
  );
}

export default Counter;
