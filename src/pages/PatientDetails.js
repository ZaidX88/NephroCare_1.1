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
      medicalHistory: [
        { date: '2024-06-10', event: 'Diagnosed with CKD Stage 2' },
        { date: '2024-12-05', event: 'Progressed to CKD Stage 3' },
      ],
      testResults: [
        { date: '2025-04-15', test: 'eGFR', value: '45 mL/min/1.73m²' },
        { date: '2025-04-15', test: 'Serum Creatinine', value: '1.8 mg/dL' },
      ],
      treatmentPlan: [
        { date: '2025-04-15', detail: 'Continue ACE inhibitors' },
        { date: '2025-04-15', detail: 'Low-sodium diet' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 62,
      diagnosis: 'Acute Kidney Injury',
      lastVisit: '2025-04-10',
      medicalHistory: [
        { date: '2025-03-20', event: 'Hospitalized for dehydration' },
        { date: '2025-04-01', event: 'Diagnosed with AKI' },
      ],
      testResults: [
        { date: '2025-04-10', test: 'eGFR', value: '30 mL/min/1.73m²' },
        { date: '2025-04-10', test: 'Serum Creatinine', value: '2.5 mg/dL' },
      ],
      treatmentPlan: [
        { date: '2025-04-10', detail: 'IV fluid therapy' },
        { date: '2025-04-10', detail: 'Monitor electrolyte levels' },
      ],
    },
    {
      id: 3,
      name: 'Michael Brown',
      age: 38,
      diagnosis: 'Nephrotic Syndrome',
      lastVisit: '2025-03-28',
      medicalHistory: [
        { date: '2024-08-15', event: 'Diagnosed with Nephrotic Syndrome' },
        { date: '2025-01-10', event: 'Started corticosteroids' },
      ],
      testResults: [
        { date: '2025-03-28', test: 'Proteinuria', value: '3.5 g/day' },
        { date: '2025-03-28', test: 'Serum Albumin', value: '2.8 g/dL' },
      ],
      treatmentPlan: [
        { date: '2025-03-28', detail: 'Continue corticosteroids' },
        { date: '2025-03-28', detail: 'Diuretic therapy' },
      ],
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 50,
      diagnosis: 'Polycystic Kidney Disease',
      lastVisit: '2025-04-20',
      medicalHistory: [
        { date: '2023-11-05', event: 'Diagnosed with PKD' },
        { date: '2024-09-12', event: 'Hypertension management started' },
      ],
      testResults: [
        { date: '2025-04-20', test: 'eGFR', value: '60 mL/min/1.73m²' },
        { date: '2025-04-20', test: 'Kidney Size', value: 'Enlarged (ultrasound)' },
      ],
      treatmentPlan: [
        { date: '2025-04-20', detail: 'Continue blood pressure medication' },
        { date: '2025-04-20', detail: 'Regular ultrasound monitoring' },
      ],
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
          </div>
        </div>

        {/* Medical History */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-8 transform hover:scale-[1.01] transition-transform">
          <h2 className="text-2xl font-bold text-royal-blue mb-6 flex items-center space-x-2">
            <FaHistory />
            <span>Medical History</span>
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {patient.medicalHistory.map((entry, index) => (
              <li key={index}>
                <strong>{entry.date}:</strong> {entry.event}
              </li>
            ))}
          </ul>
        </div>

        {/* Test Results */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-8 transform hover:scale-[1.01] transition-transform">
          <h2 className="text-2xl font-bold text-royal-blue mb-6 flex items-center space-x-2">
            <FaVial />
            <span>Test Results</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple text-white">
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Test</th>
                  <th className="py-3 px-6 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {patient.testResults.map((result, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-6">{result.date}</td>
                    <td className="py-3 px-6">{result.test}</td>
                    <td className="py-3 px-6">{result.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Treatment Plan */}
        <div className="bg-white shadow-xl rounded-2xl p-8 transform hover:scale-[1.01] transition-transform">
          <h2 className="text-2xl font-bold text-royal-blue mb-6 flex items-center space-x-2">
            <FaClipboardList />
            <span>Treatment Plan</span>
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {patient.treatmentPlan.map((plan, index) => (
              <li key={index}>
                <strong>{plan.date}:</strong> {plan.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;