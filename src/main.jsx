import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Pages/App'
import Contato from './Pages/Contato'
import Sobre from './Pages/Sobre'
import Quiz from './Pages/Quiz'
import Erro from './Pages/Erro'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Footer } from './Components/Footer';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        
        
        <Routes>
          <Route path="/" element={<App/>}>
          </Route>
          <Route path="contato" element={<Contato/>}>
          </Route>
          <Route path="sobre" element={<Sobre/>}>
          </Route>
          <Route path="quiz" element={<Quiz/>}>
          </Route>
          <Route path="*" element={<Erro/>}>
          </Route>
        </Routes> 
        <Footer/>
      </Router>
      
    </ThemeProvider>
  </React.StrictMode>
);
