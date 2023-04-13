import {render , screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./index";

describe("Form Testleri", ()=> {
    let button, input;;

beforeEach(()=> {
    render(<Form />);

    button =screen.getByText("Add Contacts");
    input =screen.getAllByPlaceholderText("Full Name","Phone Number");
});


test("Varsayılan elemanların gösterilmesi", ()=> {
    const items = screen.getAllByAltText(/Item/i);

    expect(items.length).toEqual(3);
});

test("input ve button elemanları dökümanda bulunmalı!", ()=>{
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
});

test("Butona tıklandığında contacts olarak inputa girilen değer liste olarak eklenmeli.", ()=>{
    // input
    const full_name = "Fatma Bulut";
    userEvent.type(input,full_name);

    // button
    userEvent.click(button);

    // assertion 
    expect(screen.getByText(full_name)).toBeInTheDocument();
});
});