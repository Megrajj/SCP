import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavMenu from "./NavMenu";
import Scpdetail from "./Scpdetail";
import "./style/index.css"; // Import your global CSS styles

function App() {
    return (
        <Router>
            <div className="app">
                <header className="header">
                    <h1>Welcome to the SCP Archive</h1>
                    <NavMenu />
                </header>

                <main className="main-content">
                    <Routes>
                        <Route path="/scp/:item" element={<Scpdetail />} />
                        <Route path="/" element={<h2>Explore the bizarre and the unknown.</h2>} />
                    </Routes>
                </main>

                <footer className="footer">
                    <div className="footer-content">
                        <p>© 2024 SCP Foundation | All Rights Reserved</p>
                        <nav className="footer-nav">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/scp/SCP-002">SCP-002</a></li>
                                <li><a href="/scp/SCP-003">SCP-003</a></li>
                                <li><a href="/scp/SCP-004">SCP-004</a></li>
                                <li><a href="/scp/SCP-005">SCP-005</a></li>
                                <li><a href="/scp/SCP-006">SCP-006</a></li>
                            </ul>
                        </nav>
                        <div className="social-links">
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
