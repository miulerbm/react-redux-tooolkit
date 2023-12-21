"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";

function HomePage() {
  // Llamamos a un estado global, accediendo através del reducer
  const count = useAppSelector((state) => state.counterReducer.counter);

  // Definimos a una interfaz que nos permite acceder a las funciones globales de redux:
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>total: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>

      <br />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default HomePage;
