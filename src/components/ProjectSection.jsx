import React, { useContext, useState } from "react";
import "../styles/projectSection.css";
import Todo from "./Todo";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {UserContext} from "../UserContext";


function ProjectSection() {

 
  const arr1 = [
    {
      id: "1",
      load: "Low",
      title: "Brainstorming",
      desc: `Brainstorming brings team members' diverse experience into play.`,
      comment: "12",
      files: "0",
      profile: "3",
      partImg: '/part1.png',
      loadBg: '#DFA87433',
      loadColor: '#D58D49',

    },
    {
      id: "2",
      load: "High",
      title: "Research",
      desc: `User research helps you to create an optimal product for users.`,
      comment: "10",
      files: "3",
      profile: "2",
      partImg: '/part4.png',
      loadBg: '#D8727D1A',
      loadColor: '#D8727D',


    },
    {
      id: "3",
      load: "High",
      title: "Wireframes",
      desc: `Low fidelity wireframes include the most basic content and visuals.`,
      comment: "12",
      files: "0",
      profile: "3",
      partImg: '/part3.png',
      loadBg: '#D8727D1A',
      loadColor: '#D8727D',

    }
  ]
   const arr2 = [ 
    {
      id: "4",
      load: "Low",
      title: "Onboarding Illustrations",
      comment: "14",
      img: "/flowers.png",
      files: "15",
      profile: "3",
      partImg: '/part3.png',
      loadBg: '#DFA87433',
      loadColor: '#D58D49',
    },
    {
      id: "5",
      load: "Low",
      title: "Moodboard",
      img: "/plants.png",
      comment: "9",
      files: "10",
      profile: "1",
      partImg: '/profile4.png',
      loadBg: '#DFA87433',
      loadColor: '#D58D49',
    }
  ]
   
  const arr3 = [
    {
      id: "6",
      load: "Completed",
      title: "Mobile App Design",
      img: "/appDesign.png",
      comment: "12",
      files: "15",
      profile: "2",
      partImg: '/part2.png',
      loadBg: '#83C29D33',
      loadColor: '#68B266',
    },
    {
      id: "7",
      load: "Completed",
      title: "Design System",
      desc: `It just needs to adapt the UI from what you did before `,
      comment: "12",
      files: "15",
      profile: "3",
      partImg: '/part1.png',
      loadBg: '#83C29D33',
      loadColor: '#68B266',
    },
  ];


  const [todo, setTodo] = useState(arr1);
  const [onProgress, setOnProgress] = useState(arr2);
  const [done, setDone] = useState(arr3);

  const {isClicked} = useContext(UserContext);


  const onDragEnd = (result) => {
    const { destination, source } = result;

    console.log(result)

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todo;
    let complete = onProgress;
    let final = done;

    
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else if (source.droppableId === "OnProgessList"){
      add = complete[source.index];
      complete.splice(source.index, 1);
    }else {
      add = final[source.index];
      final.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else if(destination.droppableId === "OnProgessList"){
      complete.splice(destination.index, 0, add);
    } else {
      final.splice(destination.index, 0, add)
    }

    setOnProgress(complete);
    setTodo(active);
    setDone(final)
  };



  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="ProjectSection">
        <div className="title-section">
          <div className="title-section-left">
            <h1 style={{ marginRight: "1rem" }}>Mobile App</h1>
            <svg
              style={{ marginRight: "1rem" }}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
                fill="#5030E5"
                fillOpacity="0.2"
              />
              <path
                d="M16.1375 9.80001L9.64998 16.2875C9.39998 16.5375 9.16249 17.025 9.11249 17.375L8.76249 19.85C8.63749 20.75 9.26249 21.375 10.1625 21.25L12.6375 20.9C12.9875 20.85 13.475 20.6125 13.725 20.3625L20.2125 13.875C21.325 12.7625 21.8625 11.4625 20.2125 9.81251C18.5625 8.15001 17.2625 8.67501 16.1375 9.80001Z"
                stroke="#5030E5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.2125 10.725C15.7625 12.6875 17.3 14.2375 19.275 14.7875"
                stroke="#5030E5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
                fill="#5030E5"
                fillOpacity="0.2"
              />
              <path
                d="M16.9933 19.3167H18C20.3828 19.3167 22.3167 17.3829 22.3167 15C22.3167 12.6172 20.3828 10.6833 18 10.6833H17C16.6359 10.6833 16.35 10.9785 16.35 11.3333C16.35 11.6895 16.6438 11.9833 17 11.9833H18C19.6638 11.9833 21.0167 13.3362 21.0167 15C21.0167 16.6638 19.6638 18.0167 18 18.0167H16.9933C16.6372 18.0167 16.3433 18.3105 16.3433 18.6667C16.3433 19.0229 16.6372 19.3167 16.9933 19.3167Z"
                fill="#5030E5"
                stroke="#5030E5"
                strokeWidth="0.3"
              />
              <path
                d="M12 19.3167H13C13.3562 19.3167 13.65 19.0229 13.65 18.6667C13.65 18.3105 13.3562 18.0167 13 18.0167H12C10.3362 18.0167 8.98334 16.6638 8.98334 15C8.98334 13.3362 10.3362 11.9833 12 11.9833H13C13.3562 11.9833 13.65 11.6895 13.65 11.3333C13.65 10.9772 13.3562 10.6833 13 10.6833H12C9.61716 10.6833 7.68334 12.6172 7.68334 15C7.68334 17.3829 9.61716 19.3167 12 19.3167Z"
                fill="#5030E5"
                stroke="#5030E5"
                strokeWidth="0.3"
              />
              <path
                d="M12.3333 15.65H17.6667C18.0228 15.65 18.3167 15.3562 18.3167 15C18.3167 14.6438 18.0228 14.35 17.6667 14.35H12.3333C11.9772 14.35 11.6833 14.6438 11.6833 15C11.6833 15.3562 11.9772 15.65 12.3333 15.65Z"
                fill="#5030E5"
                stroke="#5030E5"
                strokeWidth="0.3"
              />
            </svg>
          </div>

          <div className="title-section-right">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{marginTop:'5px'}}
            >
              <path
                d="M6 9H12"
                stroke="#5030E5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12V6"
                stroke="#5030E5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
                fill="#5030E5"
                fillOpacity="0.2"
              />
            </svg>

            <p style={{marginLeft: '5px', marginRight: '1rem', color:'#5030E5', fontWeight:'500'}}>Invite</p>
            <img src="group-profile.png" alt="" className="title_participates" />
  
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-section-left">
            <div className="filter_menu" style={{cursor:'pointer'}}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33334 1.33333V3.33333"
                  stroke="#787486"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 1.33333V3.33333"
                  stroke="#787486"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 2.33333C12.8867 2.45333 14 3.29999 14 6.43333V10.5533C14 13.3 13.3333 14.6733 10 14.6733H6C2.66667 14.6733 2 13.3 2 10.5533V6.43333C2 3.29999 3.11333 2.45999 5.33333 2.33333H10.6667Z"
                  stroke="#787486"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8333 11.7333H2.16666"
                  stroke="#787486"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00001 5.5C7.18001 5.5 6.48668 5.94667 6.48668 6.81333C6.48668 7.22667 6.68001 7.54 6.97334 7.74C6.56668 7.98 6.33334 8.36667 6.33334 8.82C6.33334 9.64667 6.96668 10.16 8.00001 10.16C9.02668 10.16 9.66668 9.64667 9.66668 8.82C9.66668 8.36667 9.43334 7.97333 9.02001 7.74C9.32001 7.53333 9.50668 7.22667 9.50668 6.81333C9.50668 5.94667 8.82001 5.5 8.00001 5.5ZM8.00001 7.39333C7.65334 7.39333 7.40001 7.18667 7.40001 6.86C7.40001 6.52667 7.65334 6.33333 8.00001 6.33333C8.34668 6.33333 8.60001 6.52667 8.60001 6.86C8.60001 7.18667 8.34668 7.39333 8.00001 7.39333ZM8.00001 9.33333C7.56001 9.33333 7.24001 9.11333 7.24001 8.71333C7.24001 8.31333 7.56001 8.1 8.00001 8.1C8.44001 8.1 8.76001 8.32 8.76001 8.71333C8.76001 9.11333 8.44001 9.33333 8.00001 9.33333Z"
                  fill="#787486"
                />
              </svg>

              <select style={{ fontSize: "16px" }}>
                <option >Filter</option>
                {(option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )}
              </select>
            </div>

            <div className="filter_menu" style={{cursor:'pointer'}}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33334 1.33333V3.33333"
                  stroke="#787486"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 1.33333V3.33333"
                  stroke="#787486"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 2.33333C12.8867 2.45333 14 3.29999 14 6.43333V10.5533C14 13.3 13.3333 14.6733 10 14.6733H6C2.66667 14.6733 2 13.3 2 10.5533V6.43333C2 3.29999 3.11333 2.45999 5.33333 2.33333H10.6667Z"
                  stroke="#787486"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8333 11.7333H2.16666"
                  stroke="#787486"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00001 5.5C7.18001 5.5 6.48668 5.94667 6.48668 6.81333C6.48668 7.22667 6.68001 7.54 6.97334 7.74C6.56668 7.98 6.33334 8.36667 6.33334 8.82C6.33334 9.64667 6.96668 10.16 8.00001 10.16C9.02668 10.16 9.66668 9.64667 9.66668 8.82C9.66668 8.36667 9.43334 7.97333 9.02001 7.74C9.32001 7.53333 9.50668 7.22667 9.50668 6.81333C9.50668 5.94667 8.82001 5.5 8.00001 5.5ZM8.00001 7.39333C7.65334 7.39333 7.40001 7.18667 7.40001 6.86C7.40001 6.52667 7.65334 6.33333 8.00001 6.33333C8.34668 6.33333 8.60001 6.52667 8.60001 6.86C8.60001 7.18667 8.34668 7.39333 8.00001 7.39333ZM8.00001 9.33333C7.56001 9.33333 7.24001 9.11333 7.24001 8.71333C7.24001 8.31333 7.56001 8.1 8.00001 8.1C8.44001 8.1 8.76001 8.32 8.76001 8.71333C8.76001 9.11333 8.44001 9.33333 8.00001 9.33333Z"
                  fill="#787486"
                />
              </svg>

              <select style={{ fontSize: "16px" }}>
                <option >Today</option>
              </select>
            </div>
          </div>

          <div className="filter-section-right">
            <span style={{ margin: "0 1rem" , cursor:"pointer"  }}>
              <svg
                width="97"
                height="40"
                viewBox="0 0 97 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1064 20.7467C21.0864 20.7467 21.0731 20.7467 21.0531 20.7467C21.0197 20.74 20.9731 20.74 20.9331 20.7467C18.9997 20.6867 17.5397 19.1667 17.5397 17.2933C17.5397 15.3867 19.0931 13.8333 20.9997 13.8333C22.9064 13.8333 24.4597 15.3867 24.4597 17.2933C24.4531 19.1667 22.9864 20.6867 21.1264 20.7467C21.1197 20.7467 21.1131 20.7467 21.1064 20.7467ZM20.9997 14.8333C19.6464 14.8333 18.5397 15.94 18.5397 17.2933C18.5397 18.6267 19.5797 19.7 20.9064 19.7467C20.9464 19.74 21.0331 19.74 21.1197 19.7467C22.4264 19.6867 23.4531 18.6133 23.4597 17.2933C23.4597 15.94 22.3531 14.8333 20.9997 14.8333Z"
                  fill="#787486"
                />
                <path
                  d="M26.0264 20.8333C26.0064 20.8333 25.9864 20.8333 25.9664 20.8267C25.6931 20.8533 25.4131 20.66 25.3864 20.3867C25.3597 20.1133 25.5264 19.8667 25.7997 19.8333C25.8797 19.8267 25.9664 19.8267 26.0397 19.8267C27.0131 19.7733 27.7731 18.9733 27.7731 17.9933C27.7731 16.98 26.9531 16.16 25.9397 16.16C25.6664 16.1667 25.4397 15.94 25.4397 15.6667C25.4397 15.3933 25.6664 15.1667 25.9397 15.1667C27.4997 15.1667 28.7731 16.44 28.7731 18C28.7731 19.5333 27.5731 20.7733 26.0464 20.8333C26.0397 20.8333 26.0331 20.8333 26.0264 20.8333Z"
                  fill="#787486"
                />
                <path
                  d="M21.1131 28.0333C19.8064 28.0333 18.4931 27.7 17.4997 27.0333C16.5731 26.42 16.0664 25.58 16.0664 24.6667C16.0664 23.7533 16.5731 22.9067 17.4997 22.2867C19.4997 20.96 22.7397 20.96 24.7264 22.2867C25.6464 22.9 26.1597 23.74 26.1597 24.6533C26.1597 25.5667 25.6531 26.4133 24.7264 27.0333C23.7264 27.7 22.4197 28.0333 21.1131 28.0333ZM18.0531 23.1267C17.4131 23.5533 17.0664 24.1 17.0664 24.6733C17.0664 25.24 17.4197 25.7867 18.0531 26.2067C19.7131 27.32 22.5131 27.32 24.1731 26.2067C24.8131 25.78 25.1597 25.2333 25.1597 24.66C25.1597 24.0933 24.8064 23.5467 24.1731 23.1267C22.5131 22.02 19.7131 22.02 18.0531 23.1267Z"
                  fill="#787486"
                />
                <path
                  d="M27.2264 26.8333C26.9931 26.8333 26.7864 26.6733 26.7397 26.4333C26.6864 26.16 26.8597 25.9 27.1264 25.84C27.5464 25.7533 27.9331 25.5867 28.2331 25.3533C28.6131 25.0667 28.8197 24.7067 28.8197 24.3267C28.8197 23.9467 28.6131 23.5867 28.2397 23.3067C27.9464 23.08 27.5797 22.92 27.1464 22.82C26.8797 22.76 26.7064 22.4933 26.7664 22.22C26.8264 21.9533 27.0931 21.78 27.3664 21.84C27.9397 21.9667 28.4397 22.1933 28.8464 22.5067C29.4664 22.9733 29.8197 23.6333 29.8197 24.3267C29.8197 25.02 29.4597 25.68 28.8397 26.1533C28.4264 26.4733 27.9064 26.7067 27.3331 26.82C27.2931 26.8333 27.2597 26.8333 27.2264 26.8333Z"
                  fill="#787486"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="96"
                  height="39"
                  rx="5.5"
                  stroke="#787486"
                />
                <path
                  d="M44.625 17.4205C44.5644 16.8826 44.3144 16.4659 43.875 16.1705C43.4356 15.8712 42.8826 15.7216 42.2159 15.7216C41.7386 15.7216 41.3258 15.7973 40.9773 15.9489C40.6288 16.0966 40.358 16.3011 40.1648 16.5625C39.9754 16.8201 39.8807 17.1136 39.8807 17.4432C39.8807 17.7197 39.9451 17.9583 40.0739 18.1591C40.2064 18.3598 40.3788 18.5284 40.5909 18.6648C40.8068 18.7973 41.0379 18.9091 41.2841 19C41.5303 19.0871 41.767 19.1591 41.9943 19.2159L43.1307 19.5114C43.5019 19.6023 43.8826 19.7254 44.2727 19.8807C44.6629 20.036 45.0246 20.2405 45.358 20.4943C45.6913 20.7481 45.9602 21.0625 46.1648 21.4375C46.3731 21.8125 46.4773 22.2614 46.4773 22.7841C46.4773 23.4432 46.3068 24.0284 45.9659 24.5398C45.6288 25.0511 45.1383 25.4545 44.4943 25.75C43.8542 26.0455 43.0795 26.1932 42.1705 26.1932C41.2992 26.1932 40.5455 26.0549 39.9091 25.7784C39.2727 25.5019 38.7746 25.1098 38.4148 24.6023C38.0549 24.0909 37.8561 23.4848 37.8182 22.7841H39.5795C39.6136 23.2045 39.75 23.5549 39.9886 23.8352C40.2311 24.1117 40.5398 24.3182 40.9148 24.4545C41.2936 24.5871 41.7083 24.6534 42.1591 24.6534C42.6553 24.6534 43.0966 24.5758 43.483 24.4205C43.8731 24.2614 44.1799 24.0417 44.4034 23.7614C44.6269 23.4773 44.7386 23.1458 44.7386 22.767C44.7386 22.4223 44.6402 22.1402 44.4432 21.9205C44.25 21.7008 43.9867 21.5189 43.6534 21.375C43.3239 21.2311 42.9508 21.1042 42.5341 20.9943L41.1591 20.6193C40.2273 20.3655 39.4886 19.9924 38.9432 19.5C38.4015 19.0076 38.1307 18.3561 38.1307 17.5455C38.1307 16.875 38.3125 16.2898 38.6761 15.7898C39.0398 15.2898 39.5322 14.9015 40.1534 14.625C40.7746 14.3447 41.4754 14.2045 42.2557 14.2045C43.0436 14.2045 43.7386 14.3428 44.3409 14.6193C44.947 14.8958 45.4242 15.2765 45.7727 15.7614C46.1212 16.2424 46.303 16.7955 46.3182 17.4205H44.625ZM50.1378 20.8182V26H48.4389V14.3636H50.1151V18.6932H50.223C50.4276 18.2235 50.7401 17.8504 51.1605 17.5739C51.581 17.2973 52.1302 17.1591 52.8082 17.1591C53.4067 17.1591 53.9295 17.2822 54.3764 17.5284C54.8272 17.7746 55.1757 18.142 55.4219 18.6307C55.6719 19.1155 55.7969 19.7216 55.7969 20.4489V26H54.098V20.6534C54.098 20.0133 53.9332 19.517 53.6037 19.1648C53.2741 18.8087 52.8158 18.6307 52.2287 18.6307C51.8272 18.6307 51.4673 18.7159 51.1491 18.8864C50.8348 19.0568 50.5866 19.3068 50.4048 19.6364C50.2268 19.9621 50.1378 20.3561 50.1378 20.8182ZM60.6037 26.1932C60.0507 26.1932 59.5507 26.0909 59.1037 25.8864C58.6567 25.678 58.3026 25.3769 58.0412 24.983C57.7836 24.589 57.6548 24.1061 57.6548 23.5341C57.6548 23.0417 57.7495 22.6364 57.9389 22.3182C58.1283 22 58.384 21.7481 58.706 21.5625C59.0279 21.3769 59.3878 21.2367 59.7855 21.142C60.1832 21.0473 60.5885 20.9754 61.0014 20.9261C61.5241 20.8655 61.9484 20.8163 62.2741 20.7784C62.5999 20.7367 62.8366 20.6705 62.9844 20.5795C63.1321 20.4886 63.206 20.3409 63.206 20.1364V20.0966C63.206 19.6004 63.0658 19.2159 62.7855 18.9432C62.509 18.6705 62.0961 18.5341 61.5469 18.5341C60.9749 18.5341 60.5241 18.661 60.1946 18.9148C59.8688 19.1648 59.6435 19.4432 59.5185 19.75L57.9219 19.3864C58.1113 18.8561 58.3878 18.428 58.7514 18.1023C59.1188 17.7727 59.5412 17.5341 60.0185 17.3864C60.4957 17.2348 60.9976 17.1591 61.5241 17.1591C61.8726 17.1591 62.242 17.2008 62.6321 17.2841C63.026 17.3636 63.3935 17.5114 63.7344 17.7273C64.0791 17.9432 64.3613 18.2519 64.581 18.6534C64.8007 19.0511 64.9105 19.5682 64.9105 20.2045V26H63.2514V24.8068H63.1832C63.0734 25.0265 62.9086 25.2424 62.6889 25.4545C62.4692 25.6667 62.187 25.8428 61.8423 25.983C61.4976 26.1231 61.0848 26.1932 60.6037 26.1932ZM60.973 24.8295C61.4427 24.8295 61.8442 24.7367 62.1776 24.5511C62.5147 24.3655 62.7704 24.1231 62.9446 23.8239C63.1226 23.5208 63.2116 23.197 63.2116 22.8523V21.7273C63.151 21.7879 63.0336 21.8447 62.8594 21.8977C62.6889 21.947 62.4938 21.9905 62.2741 22.0284C62.0545 22.0625 61.8404 22.0947 61.6321 22.125C61.4238 22.1515 61.2495 22.1742 61.1094 22.1932C60.7798 22.2348 60.4787 22.3049 60.206 22.4034C59.937 22.5019 59.7211 22.6439 59.5582 22.8295C59.3991 23.0114 59.3196 23.2538 59.3196 23.5568C59.3196 23.9773 59.4749 24.2955 59.7855 24.5114C60.0961 24.7235 60.492 24.8295 60.973 24.8295ZM67.1733 26V17.2727H68.8153V18.6591H68.9062C69.0653 18.1894 69.3456 17.8201 69.7472 17.5511C70.1525 17.2784 70.6108 17.142 71.1222 17.142C71.2282 17.142 71.3532 17.1458 71.4972 17.1534C71.6449 17.161 71.7604 17.1705 71.8438 17.1818V18.8068C71.7756 18.7879 71.6544 18.767 71.4801 18.7443C71.3059 18.7178 71.1316 18.7045 70.9574 18.7045C70.5559 18.7045 70.1979 18.7898 69.8835 18.9602C69.5729 19.1269 69.3267 19.3598 69.1449 19.6591C68.9631 19.9545 68.8722 20.2917 68.8722 20.6705V26H67.1733ZM76.7628 26.1761C75.9029 26.1761 75.1624 25.9924 74.5412 25.625C73.9238 25.2538 73.4465 24.733 73.1094 24.0625C72.776 23.3883 72.6094 22.5985 72.6094 21.6932C72.6094 20.7992 72.776 20.0114 73.1094 19.3295C73.4465 18.6477 73.9162 18.1155 74.5185 17.733C75.1245 17.3504 75.8329 17.1591 76.6435 17.1591C77.1359 17.1591 77.6132 17.2405 78.0753 17.4034C78.5374 17.5663 78.9522 17.822 79.3196 18.1705C79.687 18.5189 79.9768 18.9716 80.1889 19.5284C80.401 20.0814 80.5071 20.7538 80.5071 21.5455V22.1477H73.5696V20.875H78.8423C78.8423 20.428 78.7514 20.0322 78.5696 19.6875C78.3878 19.339 78.1321 19.0644 77.8026 18.8636C77.4768 18.6629 77.0942 18.5625 76.6548 18.5625C76.1776 18.5625 75.7609 18.6799 75.4048 18.9148C75.0526 19.1458 74.7798 19.4489 74.5866 19.8239C74.3973 20.1951 74.3026 20.5985 74.3026 21.0341V22.0284C74.3026 22.6117 74.4048 23.108 74.6094 23.517C74.8177 23.9261 75.1075 24.2386 75.4787 24.4545C75.8499 24.6667 76.2836 24.7727 76.7798 24.7727C77.1018 24.7727 77.3954 24.7273 77.6605 24.6364C77.9257 24.5417 78.1548 24.4015 78.348 24.2159C78.5412 24.0303 78.6889 23.8011 78.7912 23.5284L80.3991 23.8182C80.2704 24.2917 80.0393 24.7064 79.706 25.0625C79.3764 25.4148 78.9616 25.6894 78.4616 25.8864C77.9654 26.0795 77.3991 26.1761 76.7628 26.1761Z"
                  fill="#787486"
                />
              </svg>
            </span>

            <hr style={{ borderTop: '1px solid #787486', height:'1.7rem', marginBottom: '3px', marginLeft:'2px'}}/>
      
            <span style={{ margin: "0 -1rem 0 1rem", cursor:"pointer" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="6" fill="#5030E5" />
                <path
                  d="M25.925 21.125L14.075 21.125C12.95 21.125 12.5 21.6 12.5 22.8L12.5 25.825C12.5 27.025 12.95 27.5 14.075 27.5L25.925 27.5C27.05 27.5 27.5 27.025 27.5 25.825L27.5 22.8C27.5 21.6 27.05 21.125 25.925 21.125Z"
                  fill="white"
                />
                <path
                  d="M25.925 12.5L14.075 12.5C12.95 12.5 12.5 12.975 12.5 14.175L12.5 17.2C12.5 18.3917 12.95 18.875 14.075 18.875L25.925 18.875C27.05 18.875 27.5 18.4 27.5 17.2L27.5 14.175C27.5 12.975 27.05 12.5 25.925 12.5Z"
                  fill="white"
                />
              </svg>
            </span>

            <span style={{ margin: "0 1rem", cursor:"pointer"  }}>
              <svg
                style={{ margin: "0 1rem" }}
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1949 7.99994C16.5756 7.99994 17.6949 6.88065 17.6949 5.49994C17.6949 4.11923 16.5756 2.99994 15.1949 2.99994C13.8142 2.99994 12.6949 4.11923 12.6949 5.49994C12.6949 6.88065 13.8142 7.99994 15.1949 7.99994Z"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.50001 7.99994C6.88072 7.99994 8 6.88065 8 5.49994C8 4.11923 6.88072 2.99994 5.50001 2.99994C4.11929 2.99994 3 4.11923 3 5.49994C3 6.88065 4.11929 7.99994 5.50001 7.99994Z"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.1949 17.9999C16.5756 17.9999 17.6949 16.8807 17.6949 15.4999C17.6949 14.1192 16.5756 12.9999 15.1949 12.9999C13.8142 12.9999 12.6949 14.1192 12.6949 15.4999C12.6949 16.8807 13.8142 17.9999 15.1949 17.9999Z"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.50001 17.9999C6.88072 17.9999 8 16.8807 8 15.4999C8 14.1192 6.88072 12.9999 5.50001 12.9999C4.11929 12.9999 3 14.1192 3 15.4999C3 16.8807 4.11929 17.9999 5.50001 17.9999Z"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="todo_section">

          <Droppable droppableId="TodosList" key={isClicked ? "111" : "11"}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Todo cards={todo} title="To Do" color="#5030E5" card="3" key="111"/>
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="OnProgessList" key={isClicked ? "121" : "12"}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Todo
                  cards={onProgress}
                  title="On Progess"
                  color="#FFA500"
                  card="2"
                  key='121'
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="DoneList" key={isClicked ? "131" : "13"}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Todo
                  cards={done}
                  title="Done"
                  color="#8BC48A"
                  card="2"
                  key='131'
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}

export default ProjectSection;
