import React from "react";
import {render, fireEvent} from "@testing-library/react";
import AddTodo from "../components/AddTodo";

test("allow add Todo", () => {
    const {getByText, getAllByPlaceholderText} = render(<AddTodo/>);
    const inputElement = getAllByPlaceholderText("/Add Todo/i");
    const addButton = getByText("/Add Todo/i");
// @ts-ignore
    fireEvent.change(inputElement, {target: {value: "Buy"}});
    fireEvent.click(addButton)
    expect(inputElement).toHaveValue("");
    expect(getByText("/Buy")).toBeInTheDocument()
})