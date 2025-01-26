// Function that fetches data from an API
function fetchData() {
    return fetch('https://api.example.com/data').then(res => res.json());
  }
  
  // Test that mocks the fetchData function
  test('mocks the fetchData function', () => {
    const mockFetchData = jest.fn().mockResolvedValue({ data: 'test data' });
    expect(mockFetchData()).resolves.toEqual({ data: 'test data' });
  });
  
  // Function to log user info
// function logUserInfo(user) {
//     console.log(`${user.name} logged in.`);
//   }
  
//   // Test that spies on the logUserInfo function
//   test('spies on logUserInfo function', () => {
//     const spy = jest.spyOn(console, 'log');  // Create a spy on console.log
//     logUserInfo({ name: 'Alice' });
//     expect(spy).toHaveBeenCalledWith('Alice logged in.');  // Check if console.log was called with the correct argument
//     spy.mockRestore();  // Clean up the spy after the test
//   });
  