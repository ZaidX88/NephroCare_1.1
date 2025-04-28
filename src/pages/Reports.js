import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCalendar, FaNotesMedical, FaEye } from 'react-icons/fa';
import '../assets/css/Reports.css';

function Reports() {
  const navigate = useNavigate();

  // Mock report data (aligned with Patients.js and PatientDetails.js)
  const reports = [
    {
      id: 1,
      patientName: 'John Doe',
      reportDate: '2025-04-15',
      diagnosis: 'Chronic Kidney Disease (Stage 3)',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      reportDate: '2025-04-10',
      diagnosis: 'Acute Kidney Injury',
    },
    {
      id: 3,
      patientName: 'Michael Brown',
      reportDate: '2025-03-28',
      diagnosis: 'Nephrotic Syndrome',
    },
    {
      id: 4,
      patientName: 'Emily Davis',
      reportDate: '2025-04-20',
      diagnosis: 'Polycystic Kidney Disease',
    },
  ];

  // Handle View Report button click
  const handleViewReport = (id) => {
    navigate(`/patients/${id}`);
  };

  return (
    <div className="reports-page min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-royal-blue mb-8">Diagnostic Reports</h1>
        <div className="overflow-x-auto bg-white rounded-xl shadow-xl">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-purple text-white">
                <th className="py-4 px-6 text-left flex items-center space-x-1 w-1/4">
                  <FaUser />
                  <span>Patient Name</span>
                </th>
                <th className="py-4 px-6 text-left flex items-center space-x-1 w-1/4">
                  <FaCalendar />
                  <span>Report Date</span>
                </th>
                <th className="py-4 px-6 text-left flex items-center space-x-1 w-1/4">
                  <FaNotesMedical />
                  <span>Diagnosis</span>
                </th>
                <th className="py-4 px-6 text-left flex items-center space-x-1 w-1/4">
                  <span>Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 font-medium truncate">{report.patientName}</td>
                  <td className="py-4 px-6 truncate">{report.reportDate}</td>
                  <td className="py-4 px-6 truncate">{report.diagnosis}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleViewReport(report.id)}
                      className="flex items-center space-x-1 bg-royal-blue text-white px-3 py-1 rounded-lg hover:bg-opacity-90 transition-shadow shadow-sm hover:shadow-md"
                    >
                      <FaEye />
                      <span>View Report</span>
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

export default Reports;