import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [clientId, setClientId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = new URLSearchParams();
      body.append('username', username);
      body.append('password', password);
      body.append('client_id', clientId);

      const res = await axios.post('http://localhost:8000/admin/auth/token', body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const token = res.data.access_token;
      localStorage.setItem('access_token', token);
      localStorage.setItem('client_id', clientId);
      navigate('/dashboard');
    } catch (err) {
      setError('Credencials incorrectes o error de connexió.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 space-y-4">
        <h2 className="text-xl font-bold">Inici de sessió</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input type="text" placeholder="Client ID" value={clientId} onChange={e => setClientId(e.target.value)} className="w-full p-2 border rounded" />
        <input type="text" placeholder="Usuari" value={username} onChange={e => setUsername(e.target.value)} className="w-full p-2 border rounded" />
        <input type="password" placeholder="Contrasenya" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Iniciar sessió</button>
      </form>
    </div>
  );
}

export default Login;
