type Props = {
    mostrar: string | number; 
}
export let Barra = ({mostrar}:Props)=>{
    return(<div >
        <input 
        data-testid="display"
         className="bg-slate-700 text-white p-4 rounded text-right w-full text-xl" type="Text" value={mostrar} readOnly/>
    </div>)
}