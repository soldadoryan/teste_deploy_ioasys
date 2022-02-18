import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1>Página de login!</h1>
      <Link to="/home">Home sem reload</Link>
    </>
  );
}

export default Login;
