import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LandingPage from './Components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage></LandingPage>
      <Footer/>
    </div>
  );
}

export default App;
