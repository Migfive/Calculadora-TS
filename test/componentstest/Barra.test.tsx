import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Barra } from "../../src/components/Barra";

describe('Barra', () => { 
    it('Debe mostrar el valor pasado como prop', ()=>{
        render(<Barra mostrar="123"/>); 
        expect(screen.getAllByDisplayValue("123"));
    })
 })

