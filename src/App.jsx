import './App.css';
import AllRest from './Compontents/AllRest';
import Footer from './Compontents/Footer';
import Header from './Compontents/Header';
import View_Rest from './Compontents/View_Rest';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
          <Header/>
      </header>
      <section>
          <Routes>
            <Route path='/' element={<AllRest/>}/>
            <Route path='/view/:id' element={<View_Rest/>}/>
          </Routes>
      </section>
      <footer>
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
