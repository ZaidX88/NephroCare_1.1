import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Patients from './pages/Patients';
import Alerts from './pages/Alerts';
import PatientDetails from './pages/PatientDetails';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patients/:id" element={<PatientDetails />} />
            <Route path="/alerts" element={<Alerts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;