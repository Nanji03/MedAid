import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import { useAuth } from '../context/AuthContext';

const RegisterForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await register(form.name, form.email, form.password);
      loginUser(userData);
      navigate('/flashcards');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} className="block w-full mb-3 p-2 border" required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="block w-full mb-3 p-2 border" required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="block w-full mb-4 p-2 border" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
};

export default RegisterForm;
