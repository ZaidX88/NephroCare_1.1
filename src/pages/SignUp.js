import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase'; // adjust path if needed
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore methods

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mbbs, setMbbs] = useState('');
  const [sex, setSex] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
        mbbs: mbbs,
        sex: sex,
        uid: user.uid
      });

      alert('✅ Sign-up successful!');
      // Optionally, redirect to another page after signup
    } catch (error) {
      console.error('Error signing up:', error);
      alert('❌ Error: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mbbs" className="block mb-1">MBBS</label>
            <input
              type="text"
              id="mbbs"
              value={mbbs}
              onChange={(e) => setMbbs(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sex" className="block mb-1">Sex</label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="" disabled>Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
