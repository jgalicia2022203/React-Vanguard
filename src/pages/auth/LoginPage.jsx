import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div>
        <div className="text-center mb-6">
          <img src="/img/Vanguard.svg" alt="Vanguard" className="w-16 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Log in to your account</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
