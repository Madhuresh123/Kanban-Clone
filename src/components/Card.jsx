import React, { useContext } from "react";
import "../styles/card.css";
import { Draggable } from "react-beautiful-dnd";
import {UserContext} from "../UserContext";


export default function Card(props) {

  const { item ,index } = props;
  const {isClicked,setIsClicked} = useContext(UserContext);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };


  return (
    
    <Draggable key={item.id} draggableId={item.id} index={index} setIsClicked={isClicked}
    >  
      {(provided) => (


        <div className="card" ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        >
          <div className="card_tag">
            <div className="load" style={{ backgroundColor: props.loadColor }}>
              {props.load}
            </div>
            <div className="card_option">
              <p>...</p>
            </div>
          </div>

          <div className="card_content">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            {props.img && (
              <img className="content_img" src={props.img} alt="" />
            )}
          </div>

          <div className="card_bottom">
            <div className="card_people">
              <div className="profile">
                <img src="profile2.png" alt="" />
              </div>
              <div className="profile">
                <img src="profile5.png" alt="" />
              </div>
              <div className="profile">
                <img src="profile4.png" alt="" />
              </div>
            </div>

            <div className="comment">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z"
                  fill="#787486"
                />
                <path
                  d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z"
                  fill="#787486"
                />
                <path
                  d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z"
                  fill="#787486"
                />
                <path
                  d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z"
                  fill="#787486"
                />
              </svg>

              <p>{props.comment} comment</p>
            </div>
            <div className="file">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3334 7.33334V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66667C1.00008 2 1.66674 1.33334 4.33341 1.33334H5.33341C6.33341 1.33334 6.55341 1.62667 6.93341 2.13334L7.93341 3.46667C8.18674 3.8 8.33341 4 9.00008 4H11.0001C13.6667 4 14.3334 4.66667 14.3334 7.33334Z"
                  stroke="#787486"
                  strokeMiterlimit="10"
                />
                <path
                  d="M5.33333 1.33334H11.3333C12.6667 1.33334 13.3333 2 13.3333 3.33334V4.25334"
                  stroke="#787486"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33333 10H6"
                  stroke="#787486"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>{props.files} file</p>
            </div>
          </div>
        </div>
      )}
        
        </Draggable>
  );
}
