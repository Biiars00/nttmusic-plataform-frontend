import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/useUsersService';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import InputForm from '../components/InputForm/InputForm';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ userName: '', email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(form);
      toast.success('Cadastro realizado com sucesso!');

      navigate('/user/login');
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Erro no cadastro');
    }
  };

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header 
        nameLogo="🎵 NttMusic"
      />

      <div className="flex-1 flex justify-center items-center">
        <Form 
          name="Cadastro"
          onSubmit={handleSubmit}>
          <InputForm 
            label="Nome"
            name="userName"
            type="text"
            value={form.userName}
            placeholder="Nome"
            onChange={e => setForm({ ...form, userName: e.target.value })}
          />

          <InputForm 
            label="Email"
            name="email"
            type="text"
            value={form.email}
            placeholder="Email"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <InputForm 
            label="Senha"
            name="password"
            type="text"
            value={form.password}
            placeholder="Senha"
            onChange={e => setForm({ ...form, password: e.target.value })}
          />

          <Button 
            className="w-[200px] p-4 mt-6 rounded bg-gray-800 hover:bg-gray-600 hover:duration-700" 
            classNameText="text-white font-bold text-lg"
            type="submit"
          >
            Cdastrar
          </Button>

        </Form>
      </div>

      <Footer />
    </div>
    </>
  );
};
export default Register;