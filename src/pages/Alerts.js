import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import '../assets/css/Alerts.css';
import Navbar2 from '../components/Navbar2';

function Alerts() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'patients')); // adjust collection name if needed
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const today = new Date().toISOString().split('T')[0];
  const todayAppointments = patients.filter(p => p.nextVisit === today);

  const handleDismiss = (id) => {
    if (window.confirm('Are you sure you want to dismiss this alert?')) {
      setPatients(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div className="alerts-page min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <Navbar2 />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-royal-blue mb-8">
          Patients with Appointments Today
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-purple text-white">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Diagnosis</th>
                <th className="py-3 px-4 text-left">Last Visit</th>
                <th className="py-3 px-4 text-left">Next Visit</th>
                <th className="py-3 px-4 text-left">Severity</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todayAppointments.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-6 text-center text-gray-500">
                    No patients scheduled for today.
                  </td>
                </tr>
              ) : (
                todayAppointments.map(patient => (
                  <tr
                    key={patient.id}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="py-3 px-4">{patient.name}</td>
                    <td className="py-3 px-4">{patient.diagnosis}</td>
                    <td className="py-3 px-4">{patient.lastVisit}</td>
                    <td className="py-3 px-4">{patient.nextVisit}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                          patient.severity === 'Severe'
                            ? 'bg-red-500 text-white'
                            : patient.severity === 'Moderate'
                            ? 'bg-orange-500 text-white'
                            : 'bg-green-500 text-white'
                        }`}
                      >
                        {patient.severity}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDismiss(patient.id)}
                        className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-opacity-90 transition-shadow shadow-sm hover:shadow-md"
                      >
                        <FaTimes />
                        <span>Dismiss</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
