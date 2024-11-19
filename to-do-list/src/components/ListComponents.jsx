import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosSave } from "react-icons/io";
import { useContext, useState } from "react";
import { stateContext } from "./Body";

const ListComponents = () => {
  const { toDo, setToDo } = useContext(stateContext);
  const [edit, setEdit] = useState(new Array(toDo.length).fill(false)); // Tracks edit state for each item
  const [text, setText] = useState([]); // Tracks the current editing text for each item

  // Remove an item from the list
  const filterArray = (filteredIndex) => {
    const updatedArr = toDo.filter((_, index) => index !== filteredIndex);
    setToDo(updatedArr);

    // Adjust edit and text arrays
    const newEdit = [...edit];
    newEdit.splice(filteredIndex, 1);
    setEdit(newEdit);

    const newText = [...text];
    newText.splice(filteredIndex, 1);
    setText(newText);
  };

  // Toggle edit mode for a specific item
  const editItems = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);

    // Pre-fill text array when entering edit mode
    if (newEdit[index]) {
      const newText = [...text];
      newText[index] = toDo[index];
      setText(newText);
    }
  };

  // Save the updated text for a specific item
  const saveItems = (index) => {
    const updatedToDo = [...toDo];
    updatedToDo[index] = text[index]; // Save the edited text
    setToDo(updatedToDo);

    editItems(index); // Exit edit mode
  };

  return (
    <div>
      <ul>
        {toDo.map((item, index) => (
          !edit[index] ? (
            <li className="pt-4" key={index}>
              {item}
              <FaPencil
                className="inline mx-2 cursor-pointer"
                onClick={() => editItems(index)}
              />
              <RiDeleteBin6Line
                className="inline cursor-pointer"
                onClick={() => filterArray(index)}
              />
            </li>
          ) : (
            <li className="pt-4" key={index}>
              <input
                type="text"
                value={text[index] || ""} // Ensure text[index] is always defined
                className="border border-black px-1"
                onChange={(e) => {
                  const newText = [...text];
                  newText[index] = e.target.value;
                  setText(newText);
                }}
              />
              <IoIosSave
                className="inline mx-2 cursor-pointer"
                onClick={() => saveItems(index)}
              />
              <RiDeleteBin6Line
                className="inline cursor-pointer"
                onClick={() => filterArray(index)}
              />
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default ListComponents;
