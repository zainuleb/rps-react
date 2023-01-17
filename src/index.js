import React from 'react'; // Importing the React library
import ReactDOM from 'react-dom/client'; // Importing the ReactDOM library specifically for client-side rendering
import './index.css'; // Importing the index.css file
import App from './App'; // Importing the App component
import { BrowserRouter } from 'react-router-dom'; // Importing the BrowserRouter component from the react-router-dom library

const root = ReactDOM.createRoot(document.getElementById('root')); // Creating a root element to render the app
root.render(
  // Rendering the app
  <BrowserRouter>
    <App />
    {/* Wrapping the App component in a BrowserRouter component for routing */}
  </BrowserRouter>
);
