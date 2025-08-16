import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (numberOfProducts) => {
  const correctUserName = "Dric";
  const correctPassword = "password";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userNameInputChange = (e) => {
    setUserName(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      if (userName === correctUserName && password === correctPassword) {
        navigate("/products", {
          state: {
            name: userName,
            pwd: password,
            numberOfProducts: numberOfProducts,
          },
        });
      } else {
        alert("Les identifiants sont incorrects !");
      }
    } else {
      alert("Les identifiants ne doivent pas etre vides ! ");
    }
  };
  return (
    <div className="flex flex-col gap-10 w-full h-screen justify-center items-center">
      <div className="bg-white flex flex-col md:flex-row justify-center items-center w-full max-w-sm md:max-w-4xl h-auto md:h-[360px] rounded-lg">
        <div className="w-full md:w-1/2">
          <form
            className="flex flex-col gap-10 text-base-300 justify-center items-center p-5"
            onSubmit={handleFormSubmit}
          >
            <h1 className="text-2xl font-bold ">Connectez-vous !</h1>
            <div className="flex flex-col justify-center items-center gap-5">
              <input
                value={userName}
                onChange={userNameInputChange}
                type="text"
                placeholder="Nom d'utilisateur"
                className="rounded-md w-60 h-10 pl-2 outline-3 outline-[#FFC8BE]"
              />
              <input
                value={password}
                onChange={passwordChange}
                type="password"
                placeholder="Mot de passe"
                className="rounded-md w-60 h-10 pl-2 outline-3 outline-[#FFC8BE]"
              />
            </div>
            <button
              className="bg-[#FFC8BE] font-bold w-40 h-10 rounded-md text-lg"
              type="submit"
            >
              Connexion
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/connect.jpg"
            alt="welcome"
            className="object-cover w-full h-90 rounded-lg hidden md:block"
          />
        </div>
      </div>
      <p className="text-xl font-bold"> Copyrigth@2025 </p>
    </div>
  );
};

export default Login;
