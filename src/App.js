import './styles/main.css'

import Navbar from "./components/Navbar";
import Global from "./styles/global";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        {/*<Home/>*/}
        <Projects/>
        {/*<Contacts/>*/}
        <Footer/>
      </div>
      <Global/>
    </>
  );
}

export default App;
