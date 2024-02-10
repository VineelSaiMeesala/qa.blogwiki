import { useEffect, useState } from "react";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import "../CSS/LoginSignup.css";
import { app } from "../Fileconfigsettings/firebaseconfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc } from "firebase/firestore";
function App() {
  const auth = getAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };
  const isLoginDisabled = !data.email || !data.password;
  const signIn = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .catch(error => {
      // Handle errors here
      alert(error.message);
    });
  };

  const handlelogout = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        alert("Logged In");
        setUser(user);
        setIsLoggedIn(true);
      } else {
        alert("Not Logged In");
        setUser(null);
        setIsLoggedIn(false);
      }
    });

    return () => {
      // Unsubscribe the listener when the component is unmounted
      unsubscribe();
    };
  }, [auth]);
  return (
    <div className="WrapperMain">
      <NavigationBar />
      <h2>Welcome back to BlogWiki</h2>
      <div className="FormWrapper">
        <div className="MainWrapper">
          <h2 className="loginHead">LOGIN</h2>
          <form>
            <div className="EmailWrap">
              <label For="email">Email</label>
              <input
                placeholder="Email"
                name="email"
                type="email"
                className="Emailfield"
                onChange={(event) => handleInputs(event)}
              />
            </div>
            <div className="PasswordWrap">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                className="Passwordfield"
                onChange={(event) => handleInputs(event)}
              />
            </div>
          </form>
          <div className="LoginWrap">
          <button onClick={signIn} className={`loginBtn ${isLoginDisabled ? 'disabled' : ''}`} disabled={isLoginDisabled}>
            LOGIN
          </button>
          <button onClick={handlelogout} className={`loginBtn ${isLoginDisabled ? 'disabled' : ''}`} disabled={isLoginDisabled}>
            LogOut
          </button>
          </div>
          <div className="LoginSignUpWrap">
              <p>
                Don't have an account?{" "}
                <a className="LoginSignuplink" href="www.blogwiki.in">
                  SignUp
                </a>
              </p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
