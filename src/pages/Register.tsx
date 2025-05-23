import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/useUsersService';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ userName: '', email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(form);
      alert('Cadastro realizado com sucesso!');
      navigate('/user/login');
    } catch (error: any) {
      alert(error?.response?.data?.message || 'Erro no cadastro');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <input placeholder="Nome" value={form.userName} onChange={e => setForm({ ...form, userName: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Senha" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Cadastrar</button>
      <p>Já tem conta? <Link to="/">Faça login</Link></p>
    </form>
  );
};

export default Register;