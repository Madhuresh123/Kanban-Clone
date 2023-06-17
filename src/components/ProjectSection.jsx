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
    },
    {
      id: "2",
      load: "High",
      title: "Research",
      desc: `User research helps you to create an optimal product for users.`,
      comment: "10",
      files: "3",
      profile: "2",
    },
    {
      id: "3",
      load: "High",
      title: "Wireframes",
      desc: `Low fidelity wireframes include the most basic content and visuals.`,
      comment: "12",
      files: "0",
      profile: "3",
    }
  ]
   const arr2 = [ {
      id: "4",
      load: "Low",
      title: "Onboarding Illustrations",
      comment: "14",
      img: "flowers.png",
      files: "15",
      profile: "3",
    },
    {
      id: "5",
      load: "Low",
      title: "Moodboard",
      img: "plants.png",
      comment: "9",
      files: "10",
      profile: "1",
    }
  ]
   
  const arr3 = [
    {
      id: "6",
      load: "Completed",
      title: "Mobile App Design",
      img: "appDesign.png",
      comment: "12",
      files: "15",
      profile: "2",
    },
    {
      id: "7",
      load: "Completed",
      title: "Design System",
      desc: `It just needs to adapt the UI from what you did before `,
      comment: "12",
      files: "15",
      profile: "3",
    },
  ];

  // const [cards, setCards] = useState(arr1);

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

            <p>Invite</p>

            <svg
              width="158"
              height="38"
              viewBox="0 0 158 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="19"
                cy="19"
                r="18.5"
                fill="url(#pattern0)"
                stroke="white"
              />
              <circle
                cx="49"
                cy="19"
                r="18.5"
                fill="url(#pattern1)"
                stroke="white"
              />
              <circle
                cx="79"
                cy="19"
                r="18.5"
                fill="url(#pattern2)"
                stroke="white"
              />
              <circle
                cx="109"
                cy="19"
                r="18.5"
                fill="url(#pattern3)"
                stroke="white"
              />
              <circle cx="139" cy="19" r="18.5" fill="#F4D7DA" stroke="white" />
              <path
                d="M133.277 22.1676V14.9659H134.71V22.1676H133.277ZM130.396 19.2805V17.853H137.597V19.2805H130.396ZM139.6 24V22.8068L143.292 18.9822C143.686 18.5668 144.011 18.2028 144.266 17.8903C144.526 17.5742 144.719 17.2741 144.847 16.9901C144.975 16.706 145.039 16.4041 145.039 16.0845C145.039 15.7223 144.953 15.4098 144.783 15.147C144.613 14.8807 144.38 14.6765 144.085 14.5344C143.79 14.3888 143.458 14.3161 143.089 14.3161C142.699 14.3161 142.358 14.396 142.066 14.5558C141.775 14.7156 141.551 14.9411 141.395 15.2322C141.239 15.5234 141.161 15.8643 141.161 16.255H139.589C139.589 15.5909 139.742 15.0103 140.048 14.5131C140.353 14.016 140.772 13.6307 141.305 13.3572C141.837 13.0803 142.443 12.9418 143.121 12.9418C143.806 12.9418 144.41 13.0785 144.932 13.3519C145.458 13.6218 145.868 13.9911 146.163 14.4599C146.457 14.9251 146.605 15.4506 146.605 16.0366C146.605 16.4414 146.528 16.8374 146.376 17.2244C146.227 17.6115 145.966 18.043 145.593 18.5188C145.22 18.9911 144.701 19.5646 144.037 20.2393L141.869 22.5085V22.5884H146.781V24H139.6Z"
                fill="#D25B68"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use transform="scale(0.0153846)" />
                </pattern>
                <pattern
                  id="pattern1"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use transform="scale(0.0153846)" />
                </pattern>
                <pattern
                  id="pattern2"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use transform="scale(0.0153846)" />
                </pattern>
                <pattern
                  id="pattern3"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use transform="scale(0.0153846)" />
                </pattern>
                <img
                  id="image0_1_401"
                  width="65"
                  height="65"
                  alt=""
                  href="data:image/png;base64,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"
                />
                <img
                  id="image1_1_401"
                  width="65"
                  height="65"
                  alt=""
                  href="data:image/png;base64,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"
                />
                <img
                  id="image2_1_401"
                  width="65"
                  height="65"
                  alt=""
                  href="data:image/png;base64,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"
                />
                <img
                  id="image3_1_401"
                  width="65"
                  height="65"
                  alt=""
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAcEElEQVR4Xp18eXAc53Xnr8/puWeAGWAAggAIECAJEtRFUbJs6qAsyrIlmkkcx85uyjnWqlpvbVX2yG5tZWurtpL9Z6uyR6qc2lpbVpKyV3ZsWoklOYp1U5RISoREiiJBEhQB4r4x90z39LH1vT6mZzCAKLctYaanr+/3vfd7v/e+1+LeeP7ZBA/8MQ8ebDNNk/76t/o+dowJOpQd5v7ddEZ9hwkTPETawdu3oFPpu3cB9ru9l3cP2vKazkW8K7nf3QdyT2z+3vqCHLgs98bzz/ZLvDDJDrFMwGL/4uwTLMsCx3H0l/3TsLGvznFwP9MhbKfl/aFzOI6uw9FP7Hpsl30cz7O/bCDuxbZBlC7VeNym53KOcff7j3fH03SHKQ8E9yT/Rf0XYp+ZRXgX9YPgXtXByYWLA08D59gYLfo/LNMGg8bCgKHBOwC1AILdl1mH/7nciXH/2jjbk9X82f3eDK3vWBsEkeMn/bPeOOP2jLH/NYCw6aq2gTOztp+Ft2eZM2mg7HwGimVx4Hi2z/5smz87wTXfzTPdPPv+W3+aZWx3rmPujZbQbFqtrGJLY3UGzgbEccwCbODsGbLdwN5fZwTbAly78fs6uws7zraS7bZWJt5sFds7GOogsFnmLYeefJzgv0Ar//N+9/iAmb9r3g63kAvY++oWwUjQ4Y+Wg709Yms1QHf2t+CA5lN87mBa4Jnf25NGD+1GBXsA9e+t/Mv2bZsDwNkWQFbu7LdgeMToHmdzXOvZbkVsnzKjHh9sfZyf3NlnnrG/DYIAjqIDe2gGhEHzdfubPWCH4Jg5uRt9FJxoYZOqZTKgWruBf+ZazeJWM+snyu0BsF3M5nTXzTgfCM6zE005QGx1wVaz5EaCBhd2gGFOxlyEIU8R2I0OTVbwaea7HQguIdeJ0B+/XY5xydu1QILDAcHEpHuyeypZQ5M2aNYM9XPsUTWFcMByyM4jQ2YJthUQKO7vXvwnBnWizO1YokOeFGrZ89pPb5Ot62bk4M41/fu9GO8Qo8VNslNc3qbB840c4MbrZp5wgWKhzs/KrQh100x6goIn87QtxBZOt8cJzKwcbQCxcdIcIOpm7/i7B4gXfRpBoGhN5FhXijay9kP5Wdfd7/+tWZ01C7Dm754leYrSEU8MCE9V2qZr39+JNq5ne+GVHSE4POaoMudYGwS/pHW/e6Q8xZ15/tl+07KJ0X1I3QHBv8+NEOwYFxA/KK4luJbiHzD73LzfDwB5qmNJfiB5sgq/H7vE5lOuzhEkvjxbZkN3RdhmEJos0gbBsLhJit8O+gYbqBMmPaJ3+YGOsSWv/2J+V3CBckFkALB9tVoNl69PYOzCFSSTMdy5fxj9vb0QBTfBsgftAu7eu/n79gTpTHxLkWXLb5szXJCcEClZ3KTJBu3X/k1CzWJiiuPtGSWmryczzW7izrw78KXlZbx5ZgzjNz7B3MIqTNMiTgwrCvYN7cSJY8ewsycDwQHDP2j3s99CtqPMuj5xzd3lApcoXcvwQrkTHSxMOnLOvn4Lpbpd+PI/NAPJNf2aquH8hQ/w0mvvYHZ+GczCtJqOdFsSqVQcwVAY+VwBiqygK5PEgb17ccfIMIJBxcs0/SDcHhDOIC1butfTWeYudv5ib17JwFGMLid447dPdiLOJuCbZ95fA3CtQNd1nDp9Gm+dGcPE1Cx0EygUyojGw4hHokhEwxB4AfPLK9jV24NoNAhN0wBOwMjQLtx9cAQ7Mp0ULfx8sRUQrSITkSUzfybgvIn3cwXFRBsEmTjBJkbekcd0Ufpns/H5SdLvFn4OUFUVp0+/hedfPo35lXWomk4XSrUnUauZqKoVmEw5Gcy9eAwP9iEUCkHTdQJLkiV8+eH78fl770ZAUQgIQWDq0zFWnyjxh1PXYumvpw59BuFFC0fJwk2gTDREBz9zs5BpC786Gg2/M67wVYPcB1pZWcGZc+fw1z95CTqRoo5UVEGNXc8ElGAY8bAE2TKRLZWwVtAQDIchKwqqVRWBgEwFnuOPPYTjjx+FIIp0H/de/plvZR0t3dfJZTZFB6osOSD4I4H/wow0XRA8/7fLQw0Rwj3fNAysLi/i1bdO4+9efAOmBTw01IFYUEI6FkFbWxyJeAw9O3YgHAqhWi3h2vVPcOrCVVxeLKJk8tANEzVdRzAg45snvoQvH30IvChAFEVPr2ya6Waj9SdAlN+4FS+XF4g/nBDpswS/+CFmcAbKgGg1C3538JtitVrBd7//N3h/7DI+vzuNB0d6kWpPoD3VASUagRwIQgqEwEsy0ZVp6Fifn8HZ98bwi/MTWFY55EplktnRsIJ/+/Q/w50HD0CUpPpzeNLY0bvNruvlLn4p3oBMHQQmlvyxvcHvHDegEOp89hPjVqZYLhXx5//juzAKWfzhkRGkOzuQbE9DDocgiAEIkkwmznGC52mGaUAtFjE9OYmTb5zDy1fmUDMsCDyHQ6ND+KNvfg07dnQTN9Qt0okGLbiLxkFj9s98Q2Rgv01xbzz3bL8k25zgzmorf7KY3zdrB5+U9lsiO395aRH/6b/9L3yurx3HD+9DW2eGLEAUZYiBAHhB8gZPQJoGyzVh6jrUSgkfX7+O//2Ls5hfzkLVa+jqTOGJh+/HiS9/iVzCb5WbqXuLPWQZzaVylkU+92y/KFmTzcVMv5lTRGX63hFJzQNutgYGwtTUFP78L/4K3354BKlUO0LRJNra2xGNxSCJTCHaRRemjJlFkL9aBrmFrlZx8dLH+Nm5G7j0ySxKqgbN0HHowBD+5Dv/ArFYjB7BDZ2fBoI3qZ5VuO5BI2vkhOb4b1eD7Y3cwan6emrcR4x+62GfZ2am8cwzz9KDLufK4AURBwZ34mtHH0B3KgnDMLG0vILZlQ1AlrCzeycUoYakIlMWsDA/i+ffvYQPpxaxtF5CNp9HMh7Fn/2Hf42BXX3kDs0gbCfoyDMobPrL+4SKk0WaIE5wrcEFw6vyUeHIrQ34kjLfFPhJke3eWF/D9/7v9zCQSqIvHcX62gZy+QIO7hvE3gOj4HgRY++fxaUbs7i+lEcsFsVAfy/62sO4e6gPUSWAn752DhdmVzG/lsfsyhpkScaf/cd/hb1Duz1OuD0VuY2tWFw9i9yqnO5ZRwtO2M4MFxcX8PYLJ9GhCFBNDrwoY3l+Hr1tEXzukYcQTXXj2ul/wvWJGYSSCXR2pqBLQVR0ARHJwr7BfkwvLOGHb32Iqgl8fHMe4VAQf/rHT2Ogv8+79a8NQl1BbgbBC4nOQosnhJgrbMXAzWhYFm5cvYLc9fcwNbOGy0sl5Ko6ehIhHNoZw6OPfRFyMIbZ8Qs4dfYi5rggTE5Ef0zEPcO9UMIK2tvboVscnnnhFObWi7i1XkBXKoH//G/+JeUcv/bgvYjhJlTMHZzo0GzO7CaMBwSq+NjFSasFMbrj9/tjYW4O51/+e9x93wgUIYxSsUKcoKlFyLyB3j2HWEUXarmIiSvXcHN2HjVBRqYtjnRUQXdvhshTNww888t3sbCew7XFLE4cewjHnzjWIJ8/jRS3/d1WkL7cwakXuINhA2dZn+BUfQgEt4ruWzh13cgPwsSvXoGprWH08L0IR9thWQa0chGr8xOQRAXp/v0wdZYssZqjhUohR2seUjAMORKBadWgF3MoFbP4y79/C5xhQNN5/P63vom2TNdtLNp+Fmh8nNDKEiiQuGKJQGvMIVrdioF38W9+iJ17MugaGCBRVFpbQTmfhclzSHf2QoqnYFQL4HgBqKkQQ2EIggRRUiiZ0vUK1OIaKtl1fP/ld/HoHSNIllXUwKHtkWPgfInUZxluw7FendWxBJY7+KODXyO4HEGWIzQvlbVeJb588sfI7IghkUhiY3kRywvLgCgjb4pUTeIECaoGxNuS0DdWAE5DcucAlEgbIEgwtQqq1TxKGyv4cPwmDo2MQICM1ffOI378q7DkwK899k0pNdeURTbn5H7yYWk1VZQ8BOvP4T/PMnRcPPkjtLcpkDkLy9kCIIRx4eYcPpjL4kBXAvlKFbmqia8/fD9G9+/F8sRFhKIhZHaPgJeCsEwduq5iZmYKhYqJvkgEsfYe5K5fA3/4PliB2wSBmNxJmjzyclUOS6WpDcEpqhgWyebm9NQDwaktNBRuW1Sh2TX0chm/+tFfY6A7hGyuhLdvrmJlo4r5bBEV3URIZmYvIBWP4TceuBODfT2QTA2z4xdx8N67IUeT4AwdNUPHm2OXMDAwhN3JdvClIvREGlpnpiGt39IknLSZfNhb93COpvUOL+mqy2Z/9rjpsy8ysIpVc6j0g2dWy3jxhz+CJNVQrdTw8/MTGO1MYrg9BosTAF4EL3CIRMPQjRo4wcJqWUWpUMVvHr0Hyc4UDE3D/GoW58cn8cSRI8gkUuC0CiqJNGqh8KZxN1uwd4Ank51SmhvivQFQOaAum/3svikGM0vYIjw2SG2qYpk49coreO/987izP4Ozl24iEYniq08+giAfQGlpCYooU21geXYWpy5ewbxegxwM4OknH4IpsGKThaWNHJbWCjhx9Cii8TboWg2laBSmIH1GPqBF13oVmXSCk0QRKE2K0U+I/s928tVIipuSJpPpcttKro6P4+RPn0cyouDe3hTijNa4ILr7h1GFSYQY7EijVMhi+uYkdEPF9NIsRnb14srNm+jOdCJfKGJqcQ339fVj3x33QQsFoYeDnxEAn/n7XYLWE7zlr7pidOsJbp7uWYZbZ9y00NgYGdyyGrttpVjE//n+DzC/tIqnjx1GBEC1aiHTN4iILEMMRhBIZ2DUKuA4HWurS5hbnMXC8hL0moZUIoH1YhHjk4v4yvHj6EqlIUTjDQBs6QK3A5PLF3Y1uq4YGy7qZI+2S/kSp6YbNEQP3+Itqwmc/IcX8eLrb+MbRw5itCuJM1emMJlVEVEkdCZiGMikMbJnGMlMBh9e+ghTC/O4PjWLkb4ulCtVlKtVJEJhPHj8awiFGYytt18LjIao0VRPIHfxNz8RCA6btLCEBpfxr2CbJpYWF/Ff/uKvMNydwPG7hiDoHF699AlyWg139O3AvaP70dHTjZXsOj68dg0fXLmJAKvbWBb0Wg3xaBC/8cUHkdh9V70w1AKHzwqCW4W2o4bPElhRxb2+mzDRqt82AGyXwJBr6Tp+9uIv8atTZ/DY6ADu6etGvqRifm0DB/YOI9PTi6tTN7FRLuGDa1MIcAY400KxoqGmqfjGY0fQO9APJTNEj8Yqz/72Qntn64Wi2/GI+jFNitHlAzrArw22cYOtbsiAKOTy+NP//pdIBDgMdbZhpL8HiUQUAi9iYWUDl2fnkFV1zC2uoTcdhWBx0HUND9+1D4cP7ocqKhDbe5xbONVidwYb/HrrYX9aoaUhOjQfzKpIbIl+c+fFZqm8HRCn3jmLH/z4eUicie62KNrCAWhsxjUgW1ZpzSGqKIiIHEYHu/DQPQcw2NsPlh4USgUIXXvsHKN5a2D4zzb3nnRuDpF+LiBLc6ICFdia6gi3k8u7vsrY/uTf/QQvvv0BKpoOSRRo5SkgigjKImRRQCYRxNE7BzE6sh9t7d0IiAIMtQCtvIFaogdcNN04SnstwC0l3xYCjXVG34BINjv1hMY8wXEH3+qV//fbAYGVxVmazMjn1vm3cH3qFt66OIHZ5TzlYSxKJMMKDvR14I49u9DV1YNosgOBYBgiI8fSBozqBixehta+C1Yg1FBIoYUXL9T71xK2wKSeNdrNqc4pHFt8aQaBiinUxmaHxmYLcW+xFRDUWEG5FlsbsDtOpi+eQmF1AeViERNT81jJl5BOhDG6exe6enoQiSbBiyICSgiSEoLIizAYCOUcLc7obMCZIQQ7+1DNrUOrFMHzEkzTsJ9vU25QpxEPEp/7+DVNQ7W5wRIcYvTC4zYG1wgGRz0Mdi8zmykeOkwsX3kf5ZVpSLxEElYKKAiEQghHYggEFKpis00UZASCEfYBZrUAo6ba9YxoGvGRw1Sdmpqew+LMFDoTUSiSs+rMsU4Y1xrcKXcSJK/ZnFXHnDZCnwzwxJK37lCf5tsuoDTiw8EwTZSKJVQ1DUoohlA8hvXx91GYnYASiiIeS0CUZXJpAkNW7NVjZ0VckNjqlATDUGHpNVhSANG990EKsbUGC1VVxczsAlZWNpDN5qGIJjLJMFKJGAzDsQyvJdiJo6zFeKvmb/+6AxEZtY+5puSrpX0aMVqAYRmo6RyqtRo0TYUoCIjEkjTg+Yunoa/PQhKDSERjNEg2WGYNbE2SMlN6z8IEJ/DgBQEmA0AQEdx1EMFkBzWUuQNxBY+qaVhaWcetqVuApmK4N0XdLoZRs/3eS/c3v8NhGzuF3abGrRaJkn+mCSjTpN6jtWyWVoIMw4LOKtO8CM2wcHbsIkYGe5HuSGF5tYDdA72YHDsFqbhEflxeX0UsFkdq5wDkQACiKNEylF25YwOlly7AB8II7r4DUiThvW9hsl4GZ0JcUeeulTCVWcjlwOtVaBW2kGt4XNHEAc2thvUWPhrsNmsL7OG0ag0Ts/M4d/EqoRwNB1EqV7CezaGzowPDQ4O4eOEjjF24jG/81pOYvDWDb/3ub2Plkyuo3PoIihSAVi5ABIf27h4owSipUrYMZxkGeEkk1Sh09iKycy84KYillVUkEzGS0zQJpGR54gq7kdztnreniw24uL6Maj5HFSrTMj4thNYbvEkP+HoY/YUV1lUxs7iKc5cnsZEv4nN3jeDkL1+jFSGRB9qTcURjUZw5ex77hwdozfHNd8fwxQfvw8NH7odg1HDj1C+Qkm0XkzgeclBBKBqHFAoT4bF7i9Ekgj17oKS72DsxmJ6ex49//hpmF1cRj4YQCEikM0IspTYtBKQAguEghgZ3Yu9wH5LxiBdG88vzVMUG69T2vcHTjAjnLsOxBm/bP2xh0FAoITPlMZctoy2RoKYq1qLPOk+YW+SLJczMLYDVFlOJOH70sxdw4qnHUamqePn1t3HskSO4965RFFaXIBbWqF2PldslHuQOgWAICIUQiHVATqYBTkQuX8TYxavU6TbY341QMED1hXyerUkW6SEZ5/Rk0sgVy+juTuHVt8bw1LEj2Le3l8bJwmducZrWNlz/b3YL2u+CwN58cU1p84tYFm6t5JFKdyARi5LPMj82DQsGMzfTBGvSImBUFeAFp9UGtHjCbmyvQgNKIIhAKAyJ1RRE0VtEcR+OPTgD9+rVG1SK28gVceHSVWhVFd2ZNPYM9SEWDVOjRqmsIqjIeO7k6+jMtOPLRw/jb3/yMr524lHsHeqlSKFVStiYn9pSWdoE6xRamSU0L8YSKKaJ189dxNj1aWqe/qOvP4muTBqKEoReY2bDWmo0710IduOAHCRfNU3dJlHG8oz9LYvOY7pADsgOBdnNFjaJOY1iJutaMSArAVpk0VQV1VKFBhVQAhBk1tfAEYDsd1Z7eOZvX4CkBHDk0Cheefs8nv7WcbIedv/s0gzUUt7xAq+B0+8Vbh8jA8Hrv/cOmJpbxNj1OSytZtGRbsdATwoXr07j3jtGkW6LExcYpoZ4NOK8HyVAEgP0wHatjXWplcFYnQWsSDgGORhyOk0sGDpLjw276YKFNtb5yohR4Gm2GXAMALVapXwjGo+RKBIlu0nDzXqzuQK++/2T+PzhgygUiujoaMe9d++jZ6qWi8gt3HJcvC6vfQlj/X0HV+76IZrPVTH28Q0yu9VcERMTE3jskYfx0fgELo/fQFssCk03cOJLR2hBpVbV8cgXDtEMuA1WVbUIvca6pS1EIzGSxbzAUzRgHMRm1nVFagI1LbICtrHzKsUSxX1BFhAOxUgvsPY+5oL+jpXl5TVySeayJNtZ7mJZYK2EcxNXEFac+7ht4G6Xjf/Nl4ZaghNqlGiatDubTZ4XcWbsQ7wzdg093R04uHeAyM+0OPz8xX/CVx4/ilfePIfFpTX093ajp7MDd+0fxEB/F/HIxOQMpqaXkWxLYrBvJ5FaOBqigRIITlYoyzJxCgOEcYGmaigUC+AEEZFgCNFElEiP5213YJuh6+RO7Fx/SYAsqVrB5NWrSIbFTe/zOHXVeoj0FJRjCiRjQwlE43Eqd5XLZfLt02OXsbqexeXLV1GzBHKLtiQTRqt49AuHwItsLdHA3MIK3hu7hHw2C0HiEAqFMTS4C4VCFXNLaySJE4kElc5UtQaZdaUJAtriUQz0daMjncTa6gamZhaouePW3CIymQy+8/snsKO7A4ZuYPLWPKZnF9GRSqKjI41IOIhoNEQW4loXs5grH32MdITlNI3SdxMIm0roHA9LDiMcCUOWAyiXmFnqBAo7OZ/LwuJkjF+7QZ0jY5cm8OqpsygUi5Q4sdB29+gwokoQqqGhWCxhYSmL/r4d2LkjQ+JnfSNHq1HBYNCbQRYeb95agFrVkGqPIhkNoy0ZhSQJ+IeX38ZKtoA/+c4/xz+++i5yxSqF73JFxdp6nvKK3YN9OLh3F+65cy/isTBZ1LUrV5FUQIUa/+b0YPvEkr+QalkoGRwW1gqYmJxGIpHCFw7vh66piCeSTqrMkh6OwAmHI+Q2armKYrmMUkXFqXMXcPrsGEqlMgmcTEcSmY5OTM0sY3UjC0UWIUoyNXqybJUmyeSRjIfRlohgPZtHsViEWq1gfmEehw8dxlePPYDv/b8X8Adf/wq0Wg2TM0tId7SjpzuDZCKEUlHDpfEbOH9hHCsbRTz1+AN44uj9yGc3kFuaRSRkRyV3awmCX1n9+OUzuHFrHsGAgD3Dw6Tg7tjXj4G+HigkchRomo5qpYRYIgmOE6GWK5QAMR1g1HQCYCOfs5fdAkHEEjHqVGWztrSyTMlUNBymATFTZb+trm2gUq5CUQIoFHJIxkNgfPmD517C6MguLK+VUFV1tMVZkUVA1TAxv7AGVa3iwL4hHNyzC3uGe7G4vIHnnn8FX3/qYewb7sP6wjRCcn0ByfcSii86+FaYrk/P44PxKeTLOnhTx+ziIhbXNVRKZfzeiQfx5BOPUsuMqmqoFvNIdrKFFBM1TaPeZMb+LCwy8VSuFknnC5yISDxOeQILoaWCreQoFOp2mBRkkc5jAJIGKBcoMoQjIbz25jnMLq4hnmjHrp4URkeGCQRJkVEuVTG7sILL4zfxzthH2MiV8PhDh3H36CCeee4l/Nd//4fQyzmoxazXiuzLSBvflWY3rhkGXn/vI4zfXMQTRx9AoaKiUiqiI5VC385urK+vYaCvjxiZyWaW0iTTXVArVXpw9lBUndINsK5WJqhYCz9LetpSHaQRGOtXymU6ThJtPcCAY+uTlmGRWGIRpVTOE3cwHmJVKUkOUhhkLX4cyz4tHoIkQhAFb3DsXu9/MI6fvfQGDu4ZQFsyhlg8jMP7+1HOLtuvMDS+jkQg0H8/gc0K++8ZMOZ/7h/fQXemA089fgQxVgRRFOhMsJg6lFAIy8vryK6vIxEL0fdYIgVd0yHLInjZ9jtd01Au5iHLrGu9TGWOVEcGIs1wGdVqFSL7Lys4TM4yWG/Ng6S4hnKZnS/brwBozDpEgEn1chF8KAKZaQ6ep5oFS+fZRq87A/jo4+v4n9/7Kf7dt38Hr7wzhm//zmOoEgj2ppu6+95H9v8DIjqJGAEEBjQAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-section-left">
            <div className="filter_menu">
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

            <div className="filter_menu">
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
                {(option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )}
              </select>
            </div>
          </div>

          <div className="filter-section-right">
            <span style={{ margin: "0 1rem" }}>
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

            <span style={{ margin: "0 1rem" }}>
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

            <span style={{ margin: "0 1rem" }}>
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
                <Todo cards={todo} title="To Do" color="#5030E5" card="4" key="111"/>
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
                  card="4"
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
                  card="4"
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
