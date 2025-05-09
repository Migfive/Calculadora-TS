import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BotonOperacion } from "../../src/components/BotonOperacion";

describe('BotonOperacion', () => {
    it('Funcionamiento del Boton', () => {
        const operador = '+';
        const mdCallBack = vi.fn();

        render(<BotonOperacion btnSymbol={operador} callbackOperacion={mdCallBack} />)

        const botonVereficado = screen.getByText('+');
        fireEvent.click(botonVereficado);
        expect(mdCallBack).toHaveBeenCalledWith('+');
        expect(mdCallBack).toHaveBeenCalledTimes(1);

    })
})
