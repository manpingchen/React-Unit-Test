# React-Unit-Test
Using React built in test library to run unit/integration test

## Features
### Group testing
``` javascript
describe("Greeting component", () => {
  //Test A
  test("renders Hello World as a text", () => {
    //Arrange: set up the test data, test conditions and test environment
    render(<Greeting />);
    //Act: run logic that should be tested
    
    //Assert: compare execution results with expected results
    const helloWorldElement = screen.getByText(/Hello World/i, { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
  //Test B
  //Test C
});
```

### Async code testing with Mocks
``` javascript
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

  // IDEAL: test with Mocks
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
```
