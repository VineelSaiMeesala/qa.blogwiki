import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Aside from "../Components/AsideLeft";
import "../CSS/MainLayout.css";
function App({ children }) {
  return (
    <div className="App">
      <div className="container">
        <div className="NavigationBar">
          <NavigationBar />
        </div>
        <div className="MainContent">
          <div>{children}</div>
        </div>
        <div className="Aside">
          <Aside />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
