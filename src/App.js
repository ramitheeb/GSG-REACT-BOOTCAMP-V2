import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import { Routes, Route, Link } from "react-router-dom";
import ToDo from "./pages/ToDo"
const App = () => {
    return <div>
        <nav >
            <Link style={{ marginRight: 10 }} to="/">Portfolio</Link>
            <Link style={{ marginRight: 10 }} to="/about">About</Link>
            <Link to="/todo">To Do</Link>

        </nav>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="todo" element={<ToDo />} />

        </Routes>
    </div>

}

export default App