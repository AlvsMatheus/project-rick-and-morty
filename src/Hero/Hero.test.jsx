import React from "react";
import { render, screen } from "@testing-library/react"
import Hero from "./Hero"
import { expect } from "vitest";

test("should render component", () => {
    render(<Hero/>);
    expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();
});

test("should render image", () => {
    render(<Hero/>);
    expect(screen.getByAltText(/{person.name}/i)).toBeInTheDocument();
})

