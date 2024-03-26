import './App.css';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Nav from './Nav';
import Main from './Main.js';
import Testimonials from './Testimonials.js';
import Bio from './Bio.js';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Header />
        <Main />
        <Testimonials />
        <Bio />
        <Footer />
      </>
    </div>
  );
}

export default App;
