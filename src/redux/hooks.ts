/** Un hook en react es una función que empieza con "use"
 * y permite importar o reutilizar funciones dentro de react
 * Es como componentes pero para código.
 */

import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
