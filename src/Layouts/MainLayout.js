import NavigationBar from "../Components/NavigationBar";
import Footer from '../Components/Footer';
function App({children}) {
  return (
    <div>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default App;
