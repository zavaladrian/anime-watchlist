import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  
  return (
    <div>
      <Header />
      <Navbar />
      <Footer className=' bottom-auto fixed' />   
    </div>
  );
}

export default App;
