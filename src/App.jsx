import PokemonList from "./components/PokemonList"
import { Route,Routes } from "react-router-dom"
import PokemonPage from "./components/PokemonPage"
function App() {

  return (
    <Routes>
        <Route path="/" element={<PokemonList/>}/>
        <Route path="/pokemon/:name" element = {<PokemonPage/>}/>
    </Routes>
  )
}

export default App