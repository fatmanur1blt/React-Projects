import {render , screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

it ("increase button" , () => {
    render(<Counter />);

    const count = screen.getByText(0);
    const increaseButton = screen.getByText("Increase");

    userEvent.click(increaseButton);
    expect(count).toHaveTextContent(1);
});

it ("decrease button" , () => {
    render(<Counter />);

    const count = screen.getByText(0);
    const decreaseButton = screen.getByText("Decrease");

    userEvent.click(decreaseButton);
    expect(count).toHaveTextContent(-1);
});