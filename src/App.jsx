import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Main_Card from "./components/Main_Card"

function App() {
  return (
    <>
      <Main_Card 
      header={< Header />} 
      content={< Outlet />} 
      />
    </>
  )
}

export default App
