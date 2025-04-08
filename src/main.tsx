import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// IMPORTANT: Adding in CSS here instead of 'index.html'
import "./assets/css/custom_styling.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTANT: Adding in Scripts here instead of 'index.html'
// WARN: Don't do this ->'import "./assets/scripts/scripts.js";', 
// code should be kept seperate in different components.

// NOTE: Creating root component to insert into 'index.html'.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)// DEF: 'StrictMode': (For entire app)
//  Whilst in dev mode, all components....:
//  1- Rerender an extra time.
//  2- Rerun Effects an extra time.
//  3- Rerun Ref callbacks an extra time.
//  All to help find bugs quicker.
