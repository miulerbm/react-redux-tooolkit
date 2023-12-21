"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";

function HomePage() {
  // Llamamos a un estado global, accediendo através del reducer
  const count = useAppSelector((state) => state.counterReducer.counter);

  // Definimos a una interfaz que nos permite acceder a las funciones globales de redux:
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center  ">
      <h1 className="m-10 text-2xl	">total: {count}</h1>
      <button
        className="border-2 mx-20 p-2"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>

      <br />
      <button
        className="border-2 mx-20 p-2"
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
