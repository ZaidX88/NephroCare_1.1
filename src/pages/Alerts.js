import React, { useState } from 'react';
import { FaUser, FaExclamationCircle, FaComment, FaCalendar, FaBell, FaTimes } from 'react-icons/fa';
import '../assets/css/Alerts.css';

function Alerts() {
  // Mock alert data
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      alertType: 'Lab Result',
      description: 'Elevated serum creatinine (2.0 mg/dL)',
      date: '2025-04-15',
      severity: 'High',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      alertType: 'Appointment',
      description: 'Missed follow-up appointment',
      date: '2025-04-12',
      severity: 'Medium',
    },
    {
      id: 3,
      patientName: 'Michael Brown',
      alertType: 'Medication',
      description: 'Non-compliance with corticosteroid regimen',
      date: '2025-03-30',
      severity: 'High',
    },
    {
      id: 4,
      patientName: 'Emily Davis',
      alertType: 'Lab Result',
      description: 'Stable eGFR, continue monitoring',
      date: '2025-04-20',
      severity: 'Low',
    },
  ]);

  // Handle dismiss alert
  const handleDismiss = (id) => {
    if (window.confirm('Are you sure you want to dismiss this alert?')) {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }
  };

  return (
    <div className="alerts-page min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-royal-blue mb-8">Patient Alerts</h1>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-purple text-white">
                <th className="py-3 px-4 text-left">Patient Name</th>
                <th className="py-3 px-4 text-left">Alert Type</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Severity</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr
                  key={alert.id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="py-3 px-4">{alert.patientName}</td>
                  <td className="py-3 px-4">{alert.alertType}</td>
                  <td className="py-3 px-4">{alert.description}</td>
                  <td className="py-3 px-4">{alert.date}</td>
                  <td className="py-4 px-6 truncate">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        alert.severity === 'High'
                          ? 'bg-red-500 text-white'
                          : alert.severity === 'Medium'
                          ? 'bg-orange-500 text-white'
                          : 'bg-green-500 text-white'
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleDismiss(alert.id)}
                      className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-opacity-90 transition-shadow shadow-sm hover:shadow-md"
                    >
                      <FaTimes />
                      <span>Dismiss</span>
                    </button>
                  </td>
                    
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Alerts;