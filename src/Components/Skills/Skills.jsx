import "./skills.css";
import Html from "../../Image/HTML.png"
import Css from "../../Image/CSS.png"
import Javascript from "../../Image/Javascript.png"
import React from "../../Image/React.png"
import Redux from "../../Image/Redux.png"
import Java from "../../Image/Java.png"
import Sql from "../../Image/Sql.png"
import Mysql from "../../Image/Mysql.png"
import Git from "../../Image/Git.png"
import Github from "../../Image/Github.png"
function Skills() {
  return (
    <>
      <div className="skills">
      <div className="trial trials"></div>
        <div className="rectangle">
           <div className="one boxx">
            <img className="html" src={Html} alt="" />
           </div>
           <div className="two boxx">
            <img className="css" src={Css} alt="" />
           </div>
           <div className="three box">{
            <img src={Javascript} alt="" />
           }</div>
           <div className="four boxx">
            <img className="react" src={React} alt="" />
           </div>
           <div className="five box">
            <img src={Redux} alt="" />
           </div>
           <div className="six box">
            <img src={Java} alt="" />
           </div>
           <div className="seven boxx">
            <img className="sql" src={Sql} alt="" />
           </div>
           <div className="eight box">
            <img src={Mysql} alt="" />
           </div>
           <div className="nine box">
            <img src={Git} alt="" />
           </div>
           <div className="ten box">
            <img src={Github} alt="" />
           </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
