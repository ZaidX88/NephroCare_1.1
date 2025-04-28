import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {FaUserPlus} from "react-icons/fa"
import '../assets/css/Patients.css';

function Patients() {
  const navigate = useNavigate();

  // Mock patient data with state
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'John Doe',
      age: 45,
      diagnosis: 'Chronic Kidney Disease (Stage 3)',
      lastVisit: '2025-04-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 62,
      diagnosis: 'Acute Kidney Injury',
      lastVisit: '2025-04-10',
    },
    {
      id: 3,
      name: 'Michael Brown',
      age: 38,
      diagnosis: 'Nephrotic Syndrome',
      lastVisit: '2025-03-28',
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 50,
      diagnosis: 'Polycystic Kidney Disease',
      lastVisit: '2025-04-20',
    },
  ]);

  // State for modal and form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    age: '',
    diagnosis: '',
    lastVisit: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  // Open modal for adding a new patient
  const openAddModal = () => {
    setFormData({ id: null, name: '', age: '', diagnosis: '', lastVisit: '' });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  // Open modal for editing an existing patient
  const openEditModal = (patient) => {
    setFormData({ ...patient });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update existing patient
      setPatients((prev) =>
        prev.map((p) =>
          p.id === formData.id ? { ...formData, age: parseInt(formData.age) } : p
        )
      );
    } else {
      // Add new patient
      const newPatient = {
        id: patients.length + 1,
        name: formData.name,
        age: parseInt(formData.age),
        diagnosis: formData.diagnosis,
        lastVisit: formData.lastVisit,
      };
      setPatients((prev) => [...prev, newPatient]);
    }
    closeModal();
  };

  // Handle delete patient
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      setPatients((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // Handle row click to navigate to patient details
  const handleRowClick = (id) => {
    navigate(`/patients/${id}`);
  };

  return (
    <div className="patients-page min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-royal-blue">Patient Records</h1>
          <button
            onClick={openAddModal}
            className="flex items-center space-x-2 bg-purple text-white px-5 py-3 rounded hover:bg-opacity-90 transition-shadow shadow-md"
          ><FaUserPlus/>
            <span>Add Patient</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-purple text-white">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Age</th>
                <th className="py-3 px-4 text-left">Diagnosis</th>
                <th className="py-3 px-4 text-left">Last Visit</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleRowClick(patient.id)}
                >
                  <td className="py-3 px-4">{patient.name}</td>
                  <td className="py-3 px-4">{patient.age}</td>
                  <td className="py-3 px-4">{patient.diagnosis}</td>
                  <td className="py-3 px-4">{patient.lastVisit}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click
                        openEditModal(patient);
                      }}
                      className="bg-royal-blue text-white px-3 py-1 rounded hover:bg-opacity-80 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click
                        handleDelete(patient.id);
                      }}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-opacity-80 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-royal-blue mb-4">
              {isEditing ? 'Edit Patient' : 'Add Patient'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                  min="1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Diagnosis</label>
                <input
                  type="text"
                  name="diagnosis"
                  value={formData.diagnosis}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Last Visit</label>
                <input
                  type="date"
                  name="lastVisit"
                  value={formData.lastVisit}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
                >
                  {isEditing ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Patients;