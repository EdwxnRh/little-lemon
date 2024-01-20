import { render, screen, waitFor } from "@testing-library/react";
import ReservationForm from "../components/ReservationForm";
import { times } from "../components/ReservationForm";
import userEvent from "@testing-library/user-event";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

test("Renders the BookingForm heading", () => {
  render(<ReservationForm />);
  const headingElement = screen.getByText("Ready to reserve a table?");
  expect(headingElement).toBeInTheDocument();
});

describe("times array", () => {
  it("should return non empty array", () => {
    expect(times.length).toBeGreaterThan(0);
  });
});

test("rendering and submitting", async () => {
  const handleSubmit = jest.fn();
  render(<ReservationForm onSubmit={handleSubmit} />);
  const user = userEvent.setup();

  await user.type(screen.getByLabelText("date"), "2024-02-07");
  await user.type(screen.getByRole("textbox", { name: /first name/i }), "John");
  await user.type(screen.getByRole("textbox", { name: /last name/i }), "Dee");
  await user.type(
    screen.getByRole("textbox", { name: /email/i }),
    "john.dee@someemail.com"
  );
  await user.type(screen.getByLabelText("phone number"), "123456");

  await user.click(screen.getByRole("button", { name: /Reserve a table/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      tel: "123456",
      email: "john.dee@someemail.com",
      firstName: "John",
      lastName: "Dee",
      date: "2024-02-07",
      nrGuests: 2,
      message: "",
      pref: "inside",
      occ: "casual",
      time: "",
    })
  );
});
