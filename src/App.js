
import './App.css';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Blog from "./pages/Blog";
import Recipes from "./pages/Recipes";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Blog/>}/>
      <Route path="Recipes" element={<Recipes/>}/>
 
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
