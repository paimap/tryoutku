import NavBar from './component/NavBar'
import './css/App.css'
import Home from './pages/Home'

function App() {


  return (
    <>
    <NavBar />
    <div className="main-content">
      <Home />
    </div>
    </>
  )
}

export default App
