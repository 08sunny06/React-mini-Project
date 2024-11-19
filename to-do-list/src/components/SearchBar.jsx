import { useContext } from "react";
import { stateContext } from "./Body";

const SearchBar = () => {
  
  const {toDo, setToDo} = useContext(stateContext)

  const changeItem = (e) => {
    if(e.key=="Enter" && e.target.value!==""){
      let newToDo = []
      newToDo = toDo.concat(e.target.value)
      setToDo(newToDo)
      e.target.value = ""
    }
  }
  
  return (
    <input
      type="text"
      placeholder="item"
      className="border border-black py-4 px-1 h-6 w-1/6"
      onKeyDown={changeItem}
    />
  );
};

export default SearchBar;
