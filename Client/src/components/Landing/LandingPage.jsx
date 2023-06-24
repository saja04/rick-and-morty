import LoginForm from "../../components/Login/LogIn";

function LandingPage({login}) {
  return (
    <div>
      <LoginForm login={login} />
    </div>
  );
}

export default LandingPage;
