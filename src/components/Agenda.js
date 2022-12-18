import "../App.css";
export default function Agenda(props) {
  return (
    <div className="agenda-list-item">
      <h3 className="title">{props.title}</h3>
      {props.topics.map((topic, index) => (
        <p key={index} className="topic">
          {topic}
        </p>
      ))}
      <p className="topic"></p>
      <h3 className="description">{props.description}</h3>
    </div>
  );
}
/*
          <h3 className="title">Angular</h3>
          <p className="topic">Introduction</p>
          <p className="topic"></p>
          <h3 className="description">Description</h3>
*/
