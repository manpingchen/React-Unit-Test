import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange: set up the test data, test conditions and test environment
    render(<Greeting />);
    //Act:`run logic that should be tested

    //Assert: compare execution results with expected results
    const helloWorldElement = screen.getByText(/Hello World/i, { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Nice to meet you ! before button clicked", () => {
    //Arrange
    render(<Greeting />);
    //Assert
    const outputElement = screen.getByText(/Nice to meet you!/i, { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Hi! Nice to meet you too! after button clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText(/Hi! Nice to meet you too!/i, { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render Nice to meet you! after button clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    //getByText in this case will throw an error not finding the text even if that is our expectation
    //using queryByText instead will throw a null
    const outputElement = screen.queryByText("Nice to meet you!", { exact: true });
    expect(outputElement).toBeNull();
  });
});
