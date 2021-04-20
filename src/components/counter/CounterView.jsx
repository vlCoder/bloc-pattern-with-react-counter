import React from "react";

const CounterView = ({ count, increment, decrement, reset, save, reload }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>zerar</button>
      <button onClick={save}>salvar</button>
      <button onClick={reload}>recarregar</button>
    </div>
  );
};

export default CounterView;
