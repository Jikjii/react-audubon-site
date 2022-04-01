import Birds from './components/Birds'
import BirdDetails from './components/BirdDetails'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/"><h1>Audubon Society</h1></Link>
      </header>
      <main>
      <Routes>
      <Route path="/" element={<Birds />} />
      <Route path="/details/:id" element={<BirdDetails />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
