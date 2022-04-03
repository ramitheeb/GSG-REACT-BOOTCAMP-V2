import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
    return <div>
        <nav >
            <Link style={{ marginRight: 10 }} to="/">Portfolio</Link>
            <Link to="/about">About</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="about" element={<About />} />
        </Routes>
    </div>

}

export default App