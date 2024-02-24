import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { app, db } from "../Fileconfigsettings/firebaseconfig";
import config from "../Config";
import "../CSS/tested.css";
import logo from '../Img/LogoTest.png'
const RestrictedContent = () => {
  const env = config("testkey");
  const auth = getAuth();
  const [allowedIP, setAllowedIP] = useState(null);
  const [userIPAddress, setUserIPAddress] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [alertShown, setAlertShown] = useState(false);
  const [apiFetched, setApiFetched] = useState(false);
  const [dbFetched, setDbFetched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ErrorMessage, SetErrorMessage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handlePublish = () => {
    alert('Blog post published:', { title, description, content });
  };
  const handleBold = () => {
  const selectedText = window.getSelection().toString();
  const contentEditableDiv = document.getElementById('ContentStyle')

  // Wrap the selected text with <strong> tags
  const modifiedContent = contentEditableDiv.innerHTML.replace(
    selectedText,
    `<strong>${selectedText}</strong>`
  );

  // Update the content of the contenteditable div
  contentEditableDiv.innerHTML = modifiedContent;
};
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setUserIPAddress(data.ip);
        setApiFetched(true);
      })
      .catch((error) => console.error("Error fetching IP address:", error));
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await getDoc(doc(db, "DB_UserIP", env));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setAllowedIP(userData.allowedIP);
          setDbFetched(true);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error Occured...!");
      }
    };
    fetchUserData();
  }, [env]);

  useEffect(() => {
    if (apiFetched && dbFetched) {
      setLoading(false);
      if (userIPAddress === allowedIP && !alertShown) {
        setShowContent(true);
      } else if (!alertShown && userIPAddress !== "") {
        // Redirect or display an error message if the IP address does not match
        SetErrorMessage("Access denied....Your are not Authorized.");
        setAlertShown(true);
      }
    }
  }, [apiFetched, dbFetched, userIPAddress, allowedIP, alertShown]);

  return (
    <div>
      {loading ? (
        <div className="Loading">
            <img src={logo} className="LoadImg"></img>
        </div>
      ) : ErrorMessage ? (
        <div className="ErrorMessagetest">{ErrorMessage}</div>
      ) : (
        showContent && (
            <div className="blog-post-creator">
            <h1>Create a New Blog Post</h1>
            <div>
              <label>Title:</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
            </div>
            <div>
              <label>Description:</label>
              <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
              />
            </div>
            <div>
              <label>Content:</label>
              <textarea id="ContentStyle"
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                rows={10} 
                cols={50} 
              />
            </div>
            <div className="formatting-tools">
              <button onClick={handleBold}>Bold</button>
              <button onClick={() => {}}>Italic</button>
              <select onChange={(e) => {}}>
                <option value="">Font Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              <select onChange={(e) => {}}>
                <option value="">Alignment</option>
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
              <button onClick={() => {}}>Unordered List</button>
              <button onClick={() => {}}>Ordered List</button>
            </div>
            <button onClick={handlePublish}>Publish</button>
          </div>
        )
      )}
    </div>
  );
};

export default RestrictedContent;
