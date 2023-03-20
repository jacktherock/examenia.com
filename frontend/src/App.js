import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Guide from './components/Guide';
// import Question from './components/Question';
import Placements from './components/Placements';
// import Notes from './components/Notes';
// import Book from './components/Book';
import Query from './components/Query';
import About from './components/About';
import Contact from './components/Contact';
import ComputerA from './components/Academics/ComputerA';
import ComputerB from './components/Books/ComputerB';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          {/* <Route path="/questions" element={<Question />} /> */}
          <Route path="/placements" element={<Placements />} />
          <Route path="/book-comp" element={<ComputerA />} />
          <Route path="/aca-comp" element={<ComputerB />} />

          {/* <Route path="/notes" element={<Notes />} /> */}
          {/* <Route path="/books" element={<Book />} /> */}
          <Route path="/query" element={<Query />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
