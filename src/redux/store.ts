// Este objeto es donde se almacenarán los valores
// que los demás componentes pueden leer.
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
});

// Con esto exporto los tipo de dato que tengo en el estado:
export type RootState = ReturnType<typeof store.getState>;

// Le damos información de qué funciones puede ejecutar a una función que vamos a utilizar:
export type AppDispatch = typeof store.dispatch;
