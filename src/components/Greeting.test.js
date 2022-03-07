import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World as a text", () => {
  //    Arrange: set up the test data, test conditions and test environment
  render(<Greeting />);
  //    Act:`run logic that should be tested

  //   Assert: compare execution results with expected results
  const helloWorldElement = screen.getByText(/Hello World/i, { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});
