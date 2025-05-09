type Props = {
  btnNumeric: string | number;
  callbackBotton: (valor: string | number) => void;
}

export let Boton = ({ btnNumeric, callbackBotton }: Props) => {
  return (
    <>
      <button
        className="p-4 m-0.5 bg-slate-600 text-white rounded"
        onClick={() => callbackBotton(btnNumeric)}>{btnNumeric}</button>
    </>
  );
};
