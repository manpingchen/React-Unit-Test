import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Test Async component", () => {
  //This is NOT ideal since it could potentially manuiplate the real server data
  //   test("renders posts if fetching request succeeds", async () => {
  //     render(<Async />);

  //     // "getAllByRole" will be failed on testing, since the list state is initially []
  //     // after useEffect cycle, list state will be set
  //     // so here using "findAllByRole", this will get back in Promise
  //     const listItemElement = await screen.findAllByRole("listitem");
  //     expect(listItemElement).not.toHaveLength(0);
  //   });

  // Ideal: test with Mocks

  test("renders posts if fetching request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "Post Title A" }],
    });
    render(<Async />);
    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
