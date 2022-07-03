import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home.js';
import Swipe from './pages/swipe.js'
import Liked from './pages/liked.js'

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" exact element={<Home></Home>}></Route>
          <Route path="/start-swiping" exact element={<Swipe></Swipe>}></Route>
          <Route path="/liked" exact element={<Liked></Liked>}></Route>
        </Routes>
        <Footer/>
    </Router>

  );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
export default App;