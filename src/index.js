import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this matches your App component file name
import './style/index.css'; // Importing your global styles

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
