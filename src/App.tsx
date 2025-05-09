import { useState } from "react";
import { Boton } from "./components/Boton";
import { Barra } from "./components/Barra";
import { BotonOperacion } from "./components/BotonOperacion";
import { operar } from "./utils/operaciones";

const App = () => {
  const [ValueNumeric, setValueNumeric] = useState<string>(""); // Guarda el Número actual
  const [operador, setoperador] = useState<string | null>(null); // Guarda el Operador actual
  const [valorPrevio, setvalorPrevio] = useState<string | null>(null); // Guarda el número anterior

  // Numeros
  let numeroArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // Simbolos
  let simbolosOperadores = ["%", "DEL", "C", "+", "-", "x", "/", "="];
  // Función para mostar Valores
  let asginarNumero = (e: string | number) => {
    setValueNumeric((prev) => (prev ?? "") + e);
  };
  // Funcion para escribir el segundo Número
  const manejarEstadosVariable = (op: string) => {
    setvalorPrevio(ValueNumeric);
    setoperador(op);
    setValueNumeric("");
  };
  const handleOperacion = (simbolo: string) => {
    if (simbolo === "=") {
      if (valorPrevio !== null && operador && ValueNumeric !== "") {
        const resultado = operar(valorPrevio, operador, ValueNumeric);
        setValueNumeric(resultado);
        setoperador(null);
      }
      
    } else if (simbolo === "C") {
      setValueNumeric("");
      setvalorPrevio(null);
      setoperador(null);
    } else if (simbolo === "DEL") {
      setValueNumeric((prev) => prev.slice(0, -1));
    } else {
      manejarEstadosVariable(simbolo);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-[320]">
        <section className="mb-4">
          <Barra mostrar={ValueNumeric} />
        </section>
        <div className="grid grid-cols-4 gap-2">
          <BotonOperacion
            btnSymbol={simbolosOperadores[0]}
            callbackOperacion={handleOperacion}
          />
          <BotonOperacion
            btnSymbol={simbolosOperadores[1]}
            callbackOperacion={handleOperacion}
          />
          <BotonOperacion
            btnSymbol={simbolosOperadores[2]}
            callbackOperacion={handleOperacion}
          />
          <BotonOperacion
            btnSymbol={simbolosOperadores[6]}
            callbackOperacion={handleOperacion}
          />


          <Boton btnNumeric={numeroArray[7]} callbackBotton={asginarNumero} />
          <Boton btnNumeric={numeroArray[8]} callbackBotton={asginarNumero} />
          <Boton btnNumeric={numeroArray[9]} callbackBotton={asginarNumero} />
          <BotonOperacion
            btnSymbol={simbolosOperadores[5]}
            callbackOperacion={handleOperacion}
          />


          <Boton btnNumeric={numeroArray[4]} callbackBotton={asginarNumero} />
          <Boton btnNumeric={numeroArray[5]} callbackBotton={asginarNumero} />
          <Boton btnNumeric={numeroArray[6]} callbackBotton={asginarNumero} />
          <BotonOperacion
            btnSymbol={simbolosOperadores[4]}
            callbackOperacion={handleOperacion}
          />

          <Boton btnNumeric={numeroArray[1]} callbackBotton={asginarNumero} />
          <Boton btnNumeric={numeroArray[2]} callbackBotton={asginarNumero} />
          <Boton btnNumeric={numeroArray[3]} callbackBotton={asginarNumero} />
          <BotonOperacion
            btnSymbol={simbolosOperadores[3]}
            callbackOperacion={handleOperacion}
          />


          <Boton btnNumeric={"."} callbackBotton={asginarNumero} />
          <Boton btnNumeric={numeroArray[0]} callbackBotton={asginarNumero} />
          
          <BotonOperacion
            btnSymbol={simbolosOperadores[7]}
            callbackOperacion={handleOperacion}
          />
        </div>
      </div>
    </section>
  );
};

export default App;
