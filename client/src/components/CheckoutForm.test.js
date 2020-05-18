import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByTestId, findByTestId } = render(<CheckoutForm />);
}); //pass

test("form shows success message on submit with form details", async () => {
    const { getByTestId, findByTestId, getByText} = render(<CheckoutForm />); //pass

    const firstName = getByTestId("firstName"); //pass
    const lastName = getByTestId("lastName"); //pass
    const address = getByTestId("address"); //pass
    const city = getByTestId("city"); //pass
    const state = getByTestId("state"); //pass
    const zip = getByTestId("zip"); //pass
    const sub = getByTestId("sub"); //pass

    

    const fName = "Mike";
    const lName = "McLeod";
    const addy = "1010 digital alley way";
    const cty = "Tacoma";
    const ste = "WA";
    const zipc = "10101";

    firstName.innerHTML = fName;
    lastName.innerHTML = lName;
    address.innerHTML = addy;
    city.innerHTML = cty;
    state.innerHTML = ste;
    zip.innerHTML = zipc;

    fireEvent.click(sub); //pass

    const success = await getByTestId("successMessage"); //pass
    
});
