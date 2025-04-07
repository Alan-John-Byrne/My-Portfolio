import Body from './components/Body.tsx'
// IMPORTANT: Adding in CSS here instead of 'index.html'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom_styling.css";
import "./assets/css/index.css"
// IMPORTANT: Adding in Scripts here instead of 'index.html'
// WARN: Don't do this ->'import "./assets/scripts/scripts.js";', 
// code should be kept seperate in different components.

const App: React.FC = () => {
  return (
    <>
      <html lang="en">
        <Body />
      </html>
    </>
  );
}

export default App
