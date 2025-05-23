import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/useUsersService';
import { IUserDataLogin } from '../types/users.interface';

const Login = () => {
  const navigate = useNavigate();
 const [formData, setFormData] = useState<IUserDataLogin>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await login(formData);
      if (!token) {
        alert('Erro ao fazer login');
        return;
      }
      localStorage.setItem('token', token);

      navigate('/music/album');
    } catch (error: any) {
      const message = error?.response?.data?.message || 'Erro no login';
      alert(message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Entrar</button>
      <p>Ainda não tem conta? <Link to="/user/login">Cadastre-se</Link></p>
    </form>
  );
};

export default Login;