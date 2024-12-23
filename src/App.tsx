import './App.css'
import ToDoWrapper from './components/ToDoWrapper'
import Footer from "./components/Footer"
import PomodoroTimer from './components/PomodoroTimer'

function App() {
  return (
    <div className="App">
      <h1>To-Do App con Pomodoro</h1>
      <PomodoroTimer />
      <ToDoWrapper />
      <Footer />
    </div>
  )
}

export default App
