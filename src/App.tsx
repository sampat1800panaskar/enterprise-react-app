import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import AdminLayout from "./components/layouts/admin-layout";
import Dashboard from "./components/Dashboard";
import Customer from "./components/customer";

function App() {
  return (
    <div className="App">
      <Router>
        <AdminLayout>
          <Routes>
            <Route path="/" Component={Dashboard} />
            <Route path="/customers" Component={Customer} />
            {/* Add more routes here */}
          </Routes>
        </AdminLayout>
      </Router>
    </div>
  );
}

export default App;
