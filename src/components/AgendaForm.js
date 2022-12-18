import { useState } from "react";
import "../App.css";

export default function AgendaForm(props) {
  function onClickViewAgenda() {
    props.func("agenda");
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [topics, setTopicArr] = useState([]);
  const [titleId, setTitleId] = useState("title-req");
  const [descriptionId, setDescriptionId] = useState("description-req");
  const [topicId, setTopicId] = useState("topic-req");
  const [topicArrayId, setTopicArrayId] = useState("topic-arr-req");

  function setWarningDisplayTitle(e) {
    console.log(e.target.value);
    if (e.target.value === "") {
      setTitleId("title-req");
    } else if (e.target.value !== "") {
      setTitleId("hide-title-req");
    }
  }
  function setWarningDisplayDescription(e) {
    setDescriptionId(
      e.target.value ? "hide-description-req" : "description-req"
    );
  }
  function setWarningDisplayTopic(e) {
    setTopicId(e.target.value ? "hide-topic-req" : "topic-req");
  }
  function setWarningDisplayTopicArr() {
    setTopicArrayId(topics.length + 1 ? "hide-topic-arr-req" : "topic-arr-req");
  }

  function handleChangeTitle(e) {
    setTitle(e.target.value);
    setWarningDisplayTitle(e);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
    setWarningDisplayDescription(e);
  }
  function handleChangeTopic(e) {
    setTopic(e.target.value);
    setWarningDisplayTopic(e);
  }
  function AddTopics(e) {
    e.preventDefault();
    if (topic) {
      setTopic("");
      setTopicArr([...topics, topic]);
      setWarningDisplayTopicArr();
      setTopicId("hide-topic-req");
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    if (title && description && topics.length) {
      const agenda = {
        title: title,
        description: description,
        topics: topics,
      };
      props.addAgenda(agenda);
      setTitle("");
      setDescription("");
      setTopic("");
      setTopicArr([]);
      setTitleId("title-req");
      setDescriptionId("description-req");
      setTopicId("topic-req");
      setTopicArrayId("topic-arr-req");
    }
  }

  return (
    <div>
      <div className="container">
        <div className="view-agenda">
          {/* View Agenda Button */}
          <button onClick={onClickViewAgenda} className="view-agenda-button">
            Click to view Agenda
          </button>
        </div>
        <div className="agenda-form">
          {/*Create agenda Form*/}
          <form onSubmit={handleSubmitForm} className="create-agenda-form">
            <label className="form-labels" htmlFor="title">
              <b>Title</b>
            </label>
            <input
              type="text"
              className="input-box"
              id="title"
              placeholder="Enter the Title"
              value={title}
              onChange={handleChangeTitle}
            />
            <small id={titleId}>Title is required</small>
            <label className="form-labels" htmlFor="description">
              <b>Description</b>
            </label>
            <input
              type="text"
              className="input-box"
              id="description"
              placeholder="Enter the Description"
              value={description}
              onChange={handleChangeDescription}
            />
            <small id={descriptionId}>Description is required</small>
            <label className="form-labels" htmlFor="topic">
              <b>Enter Topic</b>
            </label>
            <table>
              <tbody>
                <tr className="final-row">
                  <td className="input-box-td">
                    <input
                      type="text"
                      className="input-box input-box-topic"
                      id="topic"
                      placeholder="Enter the Topic"
                      value={topic}
                      onChange={handleChangeTopic}
                    />
                  </td>
                  <td className="button-1-td">
                    <button onClick={AddTopics} className="form-button">
                      + Add Topic
                    </button>
                  </td>
                  <td className="button-2-td">
                    <button type="submit" className="form-button">
                      Submit Agenda
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <small id={topicId}>Topic is required</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className="agenda-list-item">
            <h3 className="title">Added Topic</h3>
            {topics.map((topic, index) => (
              <p key={index} className="topic">
                {topic}
              </p>
            ))}

            <p id="final-line"></p>
            <h3 className="description">Refer the topics you added</h3>
            <small id={topicArrayId}>No Topics Added</small>
          </div>
        </div>
      </div>
    </div>
  );
}
