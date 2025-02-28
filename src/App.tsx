import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import TitleSection from "./components/dashboard/TitleSection";
import NewsSection from "./components/dashboard/NewsSection";
import Teams from "./pages/Teams";
import Standings from "./pages/Standings";
import Stats from "./pages/Stats";

const Home = () => (
    <main className="App-homecontent">
        <TitleSection />
        <NewsSection />
    </main>
);

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                {/* Global Header */}
                <Header />

                {/* Route Configuration */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/standings" element={<Standings />} />
                    <Route path="/stats" element={<Stats />} />
                </Routes>

                {/* Global Footer */}
                <footer className="App-footer">
                    <p>© 2025 My React App</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
