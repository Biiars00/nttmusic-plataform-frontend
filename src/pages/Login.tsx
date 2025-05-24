import { FormEvent, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/useUsersService';
import { IUserDataLogin } from '../types/users.interface';
import InputForm from '../components/InputForm/InputForm';
import Form from '../components/Form/Form';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IUserDataLogin>({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const token = await login(formData);
      if (!token) {
        toast.error('Erro ao fazer login');
        return;
      }
      localStorage.setItem('token', token);
      toast.success('Bem-vindo(a)!!!')

      navigate('/music/album');
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Dados incorretos!');
    }
  };

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 flex justify-center items-center">
        <Form 
          name="Login"
          onSubmit={handleSubmit}>
          <InputForm 
            label="Email"
            name="email"
            type="text"
            value={formData.email}
            placeholder="Email"
            onChange={e => setFormData({...formData, email: e.target.value})}
          />

          <InputForm 
            label="Senha"
            name="password"
            type="text"
            value={formData.password}
            placeholder="Senha"
            onChange={e => setFormData({...formData, password: e.target.value})}
          />

          <Button 
            className="w-[200px] p-4 mt-6 rounded bg-gray-800 hover:bg-gray-600 hover:duration-700" 
            classNameText="text-white font-bold text-lg"
            type="submit"
          >
            Entrar
          </Button>

          <div className="flex flex-col mt-16 gap-2 text-center">
            <p>Ainda não tem conta?</p>
            <a href="/user/sign-up" className="cursor-pointer text-lg text-blue-600 font-semibold hover:text-blue-900">Cadastre-se</a>
          </div>

        </Form>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default Login;