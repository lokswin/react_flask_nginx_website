// file: fe/src/app/App.js

// Import necessary React and hooks from the 'react' library
import React, { useEffect, useState } from "react";

// Import the 'axios' library for making HTTP requests
import axios from "axios";
import * as Server from 'react-dom/server'

console.log('App.js is being executed');

let Greet = () => React.createElement('h1', null, 'Hello, world!');
console.log(Server.renderToString(React.createElement(Greet)));

// Define the main functional component named 'App'
function App() {
  // Initialize state using the 'useState' hook to manage the fetched data
  const [data, setData] = useState([]);

  // Use the 'useEffect' hook to perform side effects in the component
  useEffect(() => {
    // Define an asynchronous function 'fetchData' to fetch data from the server
    const fetchData = async () => {
      try {
        // Make a GET request to the server using 'axios' and store the response
        const response = await axios.get("/api/data"); // Use '/api' as the prefix

        // Update the state with the fetched data
        setData(response.data);
      } catch (error) {
        // Handle errors by logging an error message to the console
        console.error("Error fetching data:", error);
      }
    };

    // Call the 'fetchData' function when the component mounts (empty dependency array)
    fetchData();
  }, []); // Dependency array is empty, so this effect runs once after the initial render

  // Return the JSX structure for rendering in the browser
  return (
    React.createElement('div', null,
      React.createElement('div', null,
        React.createElement('p', null, 'This is another div inside the App component.')
      ),
      // Display a heading for the React application
      React.createElement('h1', null, 'React Application'),

      // Use a conditional rendering to check if data is available
      data.length > 0 ? (
        // If data is available, render an unordered list with data items
        React.createElement('ul', null,
          data.map((item) => (
            // Map over each data item and display it as a list item with a unique key
            React.createElement('li', { key: item.id }, item.name)
          ))
        )
      ) : (
        // If no data is available, render a paragraph indicating no data
        React.createElement('p', null, 'No data available')
      )
    )
  );
}

// Export the 'App' component as the default export
export default App;
