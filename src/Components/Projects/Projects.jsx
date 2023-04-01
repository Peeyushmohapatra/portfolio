import Projectdetails from "../ProjectDetails/ProjectDetails";
import "./project.css";
import Movie_App from "../../Image/Movie App.png";
import Crypto from "../../Image/Crypto.png";
import Threater from "../../Image/Threater.png";
import Java_ATM from "../../Image/Java ATM.png";
import Tic_Tac_Toe from "../../Image/Tic_Tac_Toe.png";

import Html from "../../Image/HTML.png";
import Css from "../../Image/CSS.png";
import Javascript from "../../Image/Javascript.png";
import React from "../../Image/React.png";
import Java from "../../Image/Java.png";

function Project({ name, setName }) {
  return (
    <div className="project">
      <div className="trial designProject"></div>
      <Projectdetails
        name={"Movie App"}
        data={"This website was designed to allow viewers complete access to all movie and tv series trailers. It was created using React and React-Hooks"}
        movieImg={Movie_App}
        stackOne={Html}
        stackTwo={Css}
        stackThree={React}
        live={"https://movie-app-iota-red.vercel.app/"}
        namee={name}
        setName={setName}
        gitHub={"https://github.com/Peeyushmohapatra/movieApp"}
      />
      <Projectdetails
        name={"Crypto"}
        data={
          "CryptoVerse is a Crypto Tracking app made with ReactJS, NodeJs, EJS, Vanilla JS and axios, Cheerio that has following features Crypto Currency Tracker,Crypto Portfolio Tracker, Crypto News, Coin Events, Crypto Top Loser and Gainer, Crypto Predictions. For Data I have used API from Coingecko, Kryptocal, Cryptocompare."
        }
        movieImg={Crypto}
        stackOne={Html}
        stackTwo={Css}
        stackThree={Javascript}
        live={"https://peeyushmohapatra.github.io/Projects/Crypto/index.html"}
        namee={name}
        setName={setName}
        gitHub={"https://github.com/Peeyushmohapatra/Projects/tree/main/Crypto"}

      />
      <Projectdetails
        name={"Movie Ticket App"}
        data={
          "Open source Online Movie Ticket Booking Script (Theatre booking system) is a website to provide the customers facility to book tickets for a movie online and to gather information about the movies and theaters."
        }
        movieImg={Threater}
        stackOne={Html}
        stackTwo={Css}
        stackThree={Javascript}
        live={
          "https://peeyushmohapatra.github.io/MCT/Movie%20Ticket%20Website/index.html"
        }
        namee={name}
        setName={setName}
        gitHub={"https://github.com/Peeyushmohapatra/MCT/tree/main/Movie%20Ticket%20Website"}

      />
      <Projectdetails
        name={"ATM Code Implementation"}
        data={
          "I created this project with the help of Java, Java OOP's concept. I implement a code weather a person is allow to use ATM machine or not, I laso used few logics to identify the user weather he/sher is full fill our conditions."
        }
        movieImg={Java_ATM}
        stackOne={Java}
        live={
          "https://github.com/Peeyushmohapatra/Implementing-ATM/blob/main/ATM.java"
        }
        namee={name}
        setName={setName}
        gitHub={"https://github.com/Peeyushmohapatra/Implementing-ATM/blob/main/ATM.java"}

      />
      <Projectdetails
        name={"Tic-Tac-Toe"}
        data={
          "In the Tic-Tac-Toe game, you will see the approach of the game is implemented. In this game, two players will be played and you have one print board on the screen where from 1 to 9 number will be displayed or you can say it box number. Now, you have to choose X or O for the specific box number. For example, if you have to select any number then for X or O will be shown on the print board, and turn for next will be there. The task is to create a Java program to implement a 3×3 Tic-Tac-Toe game for two players."
        }
        movieImg={Tic_Tac_Toe}
        stackOne={Java}
        live={
          "https://github.com/Peeyushmohapatra/Tic-Tac-Toe-Game/blob/main/TIC_TAC_TOE.java"
        }
        namee={name}
        setName={setName}
        gitHub={"https://github.com/Peeyushmohapatra/Tic-Tac-Toe-Game/blob/main/TIC_TAC_TOE.java"}

      />
    </div>
  );
}

export default Project;
