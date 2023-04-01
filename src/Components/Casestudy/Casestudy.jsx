import { useContext } from "react";
import "./casestudy.css";
import { GlobalData } from "../../App";

function Casestudy({ name, setName }) {
  const globalData = useContext(GlobalData);
  console.log(globalData);
  return (
    <>
    
      {globalData &&
        globalData.map((ele) => {
          console.log(ele.name);
          console.log(name);
          if (ele.name === name) {
            return (
              <div className="lastPhaseContainer">
                <div className="style trial"></div>
                <div className="stylee trial"></div>
                
                <div className="projectHeading">
                  <li>{ele.name.toUpperCase()}</li>
                </div>
                <div className="techUsed">
                  
                  <p>Core Technologies: </p>
                    {ele.tech.map((element) => {
                      return (
                        <>
                          <li>{element}</li>
                        </>
                      );
                    })}
                  
                </div>
                <div className="aboutProject">
                    <p>Idea</p>
                  {ele.details.map((element) => {
                    return <li>- {element}</li>;
                  })}
                </div>
              </div>
            );
          }
        })}
    </>
  );
}

export default Casestudy;
