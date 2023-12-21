// Aquí se crea un componente padre para todos los componentes
/** Se crea como un componente contenedor que contendrá a todos los componentes
 * que vamos a crear
 */
"use client"; //For rendering this component using client side

import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
