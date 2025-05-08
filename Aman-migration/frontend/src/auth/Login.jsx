// Login.jsx

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {

  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard'); // Redirect after login
    } catch (err) {
      alert('Login failed');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4" dir="rtl">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">تسجيل الدخول</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-right text-gray-700 mb-2">البريد الإلكتروني</label>
            <input
            value={email} onChange={e => setEmail(e.target.value)} 
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="example@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-right text-gray-700 mb-2">كلمة المرور</label>
            <input
               value={password} onChange={e => setPassword(e.target.value)}
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            دخول
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          ليس لديك حساب؟{' '}
          <Link to="/register" className="text-orange-500 hover:underline">
            سجل الآن
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
