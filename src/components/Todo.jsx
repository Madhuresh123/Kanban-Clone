import React from "react";
import "../styles/todo.css";
import Card from "./Card";
function Todo(props) {
  return (
    <div className="todo">
      <div className="todo_title">
        <div className="todo_title_left">
          <div className="point" style={{ marginRight: "1rem", backgroundColor:props.color }}></div>
          <h2>{props.title}</h2>
          <div className="point2" style={{ marginRight: "1rem" }}>
            {props.card}
          </div>
        </div>

        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
              fill="#5030E5"
            />
            <path
              d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
              fill="#5030E5"
            />
          </svg>
        </div>
      </div>

      <hr color={props.color} size="3" width="80%" style={{ marginLeft: "2rem" }} />

      <Card
        load="Low"
        title="Brainstorming"
        desc={`Brainstorming brings team members' diverse experience into play.`}
        comment="12"
        files="0"
        profile="3"
      />

<Card
        load="High"
        title="Research"
        desc={`User research helps you to create an optimal product for users.`}
        comment="12"
        files="0"
        profile="3"
      />

<Card
        load="High"
        title="Wireframes"
        desc={`Low fidelity wireframes include the most basic content and visuals.`}
        comment="12"
        files="0"
        profile="3"
      />

    </div>
  );
}

export default Todo;
