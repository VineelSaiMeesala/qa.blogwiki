import { useEffect, useState } from "react";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import "../CSS/LoginSignup.css";
import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { app, db } from "../Fileconfigsettings/firebaseconfig";
import isFeatureEnabled from "../FeatureFlag";
function App() {

    //*Turn off in QA change FeatureFlagOn => FeatureFlagOff*//
   const FeatureFlag = isFeatureEnabled('FeatureFlagOn')

  const auth = getAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "", // Added name state
    mobileNumber: "", // Added mobileNumber state
  });
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
    // Reset password error message when user starts typing in the password fields
    if (event.target.name === "password" || event.target.name === "confirmPassword") {
      setPasswordError("");
    }
  };

  const isSignUpDisabled = !data.email || !data.password || !data.confirmPassword || !data.name || !data.mobileNumber;

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Check if passwords match
      if (data.password !== data.confirmPassword) {
        setPasswordError("Password do not match");
        return;
      }
      if(data.mobileNumber.length !== 10){
        alert('Mobile number should be 10 digit')
        return;
      }
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);

      // Save additional user info to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: data.name,
        email: data.email,
        mobileNumber: data.mobileNumber,
      });

      // Clear form fields
      setData({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        mobileNumber: "",
      });

      alert('User signed up successfully!');
    } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert('Email address is already in use.');
            break;
          case "auth/invalid-email":
            alert('Email address is not valid.');
            break;
          case "auth/weak-password":
            alert('Password is too weak.');
            break;
          default:
            alert('Error signing up:', error.message);
        }
      }
      
  };

  const handlelogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const getUserData = async () => {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log("User Name:", userData.name);
          } else {
            console.log("No such document!");
          }
        };

        getUserData();
        setUser(user);
        setIsLoggedIn(true);
      } else {
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
      <h2>Welcome to BlogWiki</h2>
      <div className="FormWrapper">
        <div className="MainWrapper">
          <h2 className="loginHead">SIGNUP</h2>
          <form>
            <div className="NameWrap">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                name="name"
                type="text"
                className="Namefield"
                value={data.name}
                onChange={(event) => handleInputs(event)}
              />
            </div>
            <div className="MobileNumberWrap">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                placeholder="Mobile Number"
                name="mobileNumber"
                type="text"
                className="MobileNumberfield"
                value={data.mobileNumber}
                onChange={(event) => handleInputs(event)}
              />
            </div>
            <div className="EmailWrap">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                name="email"
                type="email"
                className="Emailfield"
                value={data.email}
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
                value={data.password}
                onChange={(event) => handleInputs(event)}
              />
            </div>
            <div className="PasswordWrap">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                className="Passwordfield"
                value={data.confirmPassword}
                onChange={(event) => handleInputs(event)}
              />
            </div>
            {passwordError && <p className="error">{passwordError}</p>}
          </form>
          <div className="LoginWrap">
            {!isLoggedIn && <button onClick={handleSignUp} className={`loginBtn ${isSignUpDisabled ? 'disabled' : ''}`} disabled={isSignUpDisabled}>
              SIGNUP
            </button>}
          {isLoggedIn && <button onClick={handlelogout} className={`loginBtn`}>LOGOUT</button>}
          </div>
          <div className="LoginSignUpWrap">
            <p>
              already have an account?{" "}
              <Link className="LoginSignuplink" to="/LoginSignup">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
