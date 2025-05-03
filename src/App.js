import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Patients from './pages/Patients';
import Alerts from './pages/Alerts';
import PatientDetails from './pages/PatientDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patients/:id" element={<PatientDetails />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/contactus" element={<ContactUs/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;