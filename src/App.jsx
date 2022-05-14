import { useState } from 'react'
import logo from './logo.svg'
import Start from './components/Start'
import Game from './components/Game'
import Battleship from './components/Battleship'
import Yatzy from './components/Yatzy'
import './App.css'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
      <Router>
          <div>
              <header>
                <NavLink to=""> Startsida </NavLink>
                <NavLink to="/game"> Luffarschack </NavLink>
                <NavLink to="/battleship"> Sänka skepp </NavLink>
                <NavLink to="/yatzy"> Yatzy </NavLink>
              </header>
              <main>
                    <Routes>
                        <Route path='/game' element={<Game />} />
                        <Route path='/battleship' element={<Battleship />} />
                        <Route path='/yatzy' element={<Yatzy /> } />
                        <Route path='/' element={<Start />} />
                    </Routes>
              </main>
          </div>
      </Router>
  )

//   return (
//     <div className="game">
//         <div className="game-board">
//             <Board />
//         </div>
//         <div className="game-info">
//             <div> {/*playerstatus*/} </div>
//             <ol> {/*todo*/} </ol>
//         </div>
//     </div>
// )

}

export default App
