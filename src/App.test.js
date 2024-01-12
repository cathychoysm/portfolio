import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ContactMe from './components/ContactMe';

describe("Contact Me", () => {
    test("Send button disabled when form validation is not fulfilled", () => {
		// Render Component: Contact Me page
		render(<ContactMe/>);

		// Get related elements: Send button
		const sendButton = screen.getByRole("button", /Send/i);

		// Expected bahaviour: button disabled
		expect(sendButton).toBeDisabled();
    });
});

describe("Contact Me", () => {
    test("Send button enabled when form validation fulfilled and alert pop up after clicking it", async () => {
		// Render Component: Contact Me page
		render(<ContactMe/>);

		// Get related elements: Name, Email, Message input fields and Send button
		const nameInput = screen.getByLabelText(/Name/i);
		const emailInput = screen.getByLabelText(/Email/i);
		const messageInput = screen.getByLabelText(/Message/i);
		const sendButton = screen.getByRole("button", /Send/i);

		// Perform actions to meet required expectation: Filling in the form
		fireEvent.change(nameInput, { target: { value: "Testing Name" } });
		fireEvent.change(emailInput, { target: { value: "testing@email.com" } });
		fireEvent.change(messageInput, { target: { value: "Testing Message." } });

		fireEvent.click(sendButton);

		// Expected bahaviour: button is successfully clicked and alert shown
		await waitFor(() => {
			expect(screen.getByRole("alert")).toBeInTheDocument();
		});
    });
});