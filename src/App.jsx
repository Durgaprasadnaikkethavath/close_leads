import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Convert from "./sidebar/Convert";
import Dashboard from "./sidebar/Dashboard";
import FollowUps from "./sidebar/FollowUps";
import Invoice from "./sidebar/Invoice";
import Leads from "./sidebar/Leads";
import Settings from "./sidebar/Settings";
import TaskManagement from "./sidebar/TaskManagement";

const App = () => {
  return (
    <section className="navbar_sidebar">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/close" element={<close />} />
          <Route path="/convert" element={<Convert />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/followup" element={<FollowUps />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/task" element={<TaskManagement />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
