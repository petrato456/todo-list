import * as Styles from "./styles/home";
import { useState } from "react";
import Logo from "../src/assets/logo.svg";

interface ListProps {
  id: number;
  title: string;
  isConcluded: boolean;
}

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<ListProps[]>([]);

  function removeList(id: number) {
    const findId = list.filter((itemId) => itemId.id !== id);

    setList(findId);
  }

  function changeConcluded(id: number) {
    const findId = list.find((itemID) => itemID.id === id);

    const validationIsConcluded = findId?.isConcluded;

    const newList = list.map((item) =>
      item.id === findId?.id
        ? { ...item, isConcluded: validationIsConcluded ? false : true }
        : item
    );
    setList(newList);
  }

  return (
    <>
      <Styles.Header>
        <img src={Logo} alt="logo" />
      </Styles.Header>
      <input onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() =>
          setList((state) => {
            const id = state.length + 1;
            const newText = [
              ...state,
              { id: id, title: text, isConcluded: false },
            ];
            return newText;
          })
        }
      >
        Criar
      </button>

      <p>Tarefas criadas {list.length}</p>
      <Styles.Search>
        {list.map((name) => (
          <p
            className={name.isConcluded ? "concluded" : ""}
            key={name.id}
            onClick={() => changeConcluded(name.id)}
          >
            {name.title}
          </p>
        ))}
      </Styles.Search>
    </>
  );
}

export default App;
