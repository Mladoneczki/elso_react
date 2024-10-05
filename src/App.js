import "./App.css";
import Kartyak from "./components/Kartyak.js";
import { lista } from "./adatlista.js";

function App() {
 
  return (
    <div className="App">
      <header className="App-header">Első app</header>
      <article>
        <Kartyak lista={lista}/>
      </article>
      <footer>Pádi-Mladoneczki Vivien</footer>
    </div>
  );
}

export default App;
