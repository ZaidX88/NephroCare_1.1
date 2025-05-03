import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../components/Navbar2'; // Adjust the import path as necessary
import Navbar from '../components/Navbar';  

function Dashboard() {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserDetails(currentUser.uid);
      } else {
        navigate('/login'); // redirect to login if not logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchUserDetails = async (uid) => {
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <Navbar2 />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-800">Welcome to the Dashboard</h1>
        <div>
          <span className="mr-4 text-gray-700">Logged in as: {user?.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      {userDetails && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Your Details</h2>
          <div className="mt-1 text-gray-700">
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Sex:</strong> {userDetails.sex}</p>
            <p><strong>MBBS:</strong> {userDetails.mbbs}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
