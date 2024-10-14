import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure the path to your App component is correct


// Ensure that the root element exists in your index.html
const rootElement = document.getElementById('root');
if (!rootElement) {
    console.error("Root element not found. Please check your HTML.");
} else {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
