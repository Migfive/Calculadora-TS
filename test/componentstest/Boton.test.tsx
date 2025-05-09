import { fireEvent, render,screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Boton  } from "../../src/components/Boton";

describe('Boton',()=>{
    it('Descibre la entrada de un elemento', ()=>{
        const numero = 1
        const mockCallBack = vi.fn(); 
        render(<Boton btnNumeric={numero} callbackBotton={mockCallBack}/>)
        const boton = screen.getByText('1'); 
        fireEvent.click(boton);     
        expect(mockCallBack).toHaveBeenCalledWith(1);  
        expect(mockCallBack).toHaveBeenCalledTimes(1); 
    })
})