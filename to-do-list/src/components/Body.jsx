import SearchBar from "./SearchBar"
import ListComponents from "./ListComponents"
import { useState } from "react"
import { createContext } from "react"

export const stateContext = createContext({})

const Body = () => {

  const [toDo, setToDo] = useState([
    "Javascript",
    "CSS",
    "React",
    "Angular",
    "Zustang",
    "Next JS",
    "TypeScript",
  ])


  return (
    <stateContext.Provider value={{toDo, setToDo }} >
      <div className="text-center mt-4"  >
        <SearchBar />
        <ListComponents />
    </div>
    </stateContext.Provider>
    
  )
}

export default Body