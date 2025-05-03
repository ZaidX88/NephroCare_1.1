import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUser, FaHistory, FaVial, FaClipboardList, FaArrowLeft } from 'react-icons/fa';
import '../assets/css/PatientDetails.css';

function PatientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock patient and diagnostic report data
  const patients = [
    {
      id: 1,
      name: 'John Doe',
      age: 45,
      diagnosis: 'Chronic Kidney Disease (Stage 3)',
      lastVisit: '2025-04-15',
      nextVisit: '2025-05-15',
      severity: 'Moderate', // Added severity field
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 62,
      diagnosis: 'Acute Kidney Injury',
      lastVisit: '2025-04-10',
      nextVisit: '2025-04-25',
      severity: 'Severe', // Added severity field
    },
  ];

  const patient = patients.find((p) => p.id === parseInt(id));

  if (!patient) {
    return (
      <div className="patient-details-page min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-royal-blue mb-8">Patient Not Found</h1>
          <button
            onClick={() => navigate('/patients')}
            className="flex items-center space-x-2 bg-purple text-white px-5 py-3 rounded-lg hover:bg-opacity-90 transition-shadow shadow-md hover:shadow-lg"
          >
            <FaArrowLeft />
            <span>Back to Patients</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-details-page min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-royal-blue">
            Diagnostic Report: {patient.name}
          </h1>
          <button
            onClick={() => navigate('/patients')}
            className="flex items-center space-x-2 bg-purple text-white px-5 py-3 rounded-lg hover:bg-opacity-90 transition-shadow shadow-md hover:shadow-lg"
          >
            <FaArrowLeft />
            <span>Back to Patients</span>
          </button>
        </div>

        {/* Patient Information */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-8 transform hover:scale-[1.01] transition-transform">
          <h2 className="text-2xl font-bold text-royal-blue mb-6 flex items-center space-x-2">
            <FaUser />
            <span>Patient Information</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
            <p><strong>Last Visit:</strong> {patient.lastVisit}</p>
            <p><strong>Next Visit:</strong> {patient.nextVisit}</p>
            <p><strong>Severity:</strong> {patient.severity}</p> {/* Added Severity */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;