import "./App.css";
import AgendaForm from "./components/AgendaForm";
import Agenda from "./components/Agenda.js";
import { useState } from "react";

function App() {
  const [appState, setAppState] = useState("agenda");
  function onClickAddAgenda() {
    setAppState("Form");
  }

  const [agendas, setAgendas] = useState([]);
  function addAgenda(formInput) {
    const newArr = agendas.slice();
    newArr.push(formInput);
    setAgendas(newArr);
  }
  const agendaList = agendas.map((agenda, index) => (
    <Agenda
      key={index}
      title={agenda.title}
      description={agenda.description}
      topics={agenda.topics}
    />
  ));
  if (appState === "agenda") {
    return (
      <div>
        <h1>Agenda Manager</h1>
        <div className="container">
          <div className="create-agenda">
            <button onClick={onClickAddAgenda} className="create-agenda-button">
              Click to add Agenda
            </button>
          </div>
          <div className="agenda-list">{agendaList}</div>
        </div>
      </div>
    );
  }
  if (appState === "Form") {
    return (
      <div>
        <h1>Agenda Manager</h1>
        <AgendaForm addAgenda={addAgenda} app={appState} func={setAppState} />
      </div>
    );
  }
}

export default App;
