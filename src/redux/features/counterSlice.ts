/**Aquí se colocan los elementos a almacenar en el store pero por
 * categoría, por ejemplo el contador estará en counterSlice
 * Por lo general la denominación es así: {element}Slice
 *
 * IMPORTANTE: Las funciones definidas aquí podrán ser llamadas POR CUALQUIER
 * COMPONENTE de la app.
 */

import { createSlice } from "@reduxjs/toolkit";

// Puedo separar el estado inicial:
const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

// Exportamos las actions (funciones) de mi counterSlice.
// Extraemos con la deestructuración:
export const { increment, decrement } = counterSlice.actions;
// Estas funciones pueden ser llamadas por elementos de la Interfaz.

// OJO: También debemos pasarle el reducer (que contiene al estado y su valor inicial)
export default counterSlice.reducer;
// El export default simplemente hace que al hacer import en otro file, no necesitemos extraer con {imported1, imported2} from ...

/** La función counterSlice de redux es similar a:
 * const [counter, setCounter] = useState(0);
 * Solo que se emplea esta sintaxis para definirla.
 */
