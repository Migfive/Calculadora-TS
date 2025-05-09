type Props = {
  btnSymbol: string;
  callbackOperacion: (valor: string) => void;
}
export let BotonOperacion = ({ btnSymbol, callbackOperacion }: Props) => {
  return (
    <button
      className="p-4 m-0.5 bg-slate-950 text-white rounded text-1"
      onClick={() => callbackOperacion(btnSymbol)}>{btnSymbol}</button>
  );
};
