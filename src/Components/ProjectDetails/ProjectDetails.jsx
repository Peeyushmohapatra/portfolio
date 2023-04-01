import { Link } from "react-router-dom";
import "./projectdetails.css";

function Projectdetails(props) {
  console.log(props.namee);
  return (
    <>
      <div className="projectDetails">
        <div className="leftContainerr">
          <div className="textContainer">
            <h2>{props.name}</h2>

            <p>{props.data}</p>
          </div>
          <div className="buttonContainer">
            <Link className="buttonOne" to={`/project/${props.name}`}>
              <button  onClick={() => {
                props.setName(props.name)
                console.log(props.name);
              }}>Case Study</button>
            </Link>

            <Link className="buttonTwo" to={props.live}>
              <button >Live Demo</button>
            </Link>
            <Link className="buttonTwo" to={props.gitHub}>
            <button className="buttonThree"><i class="fa-brands fa-github fa-beat"></i></button>
            </Link>
          </div>
        </div>
        <div className="rightContainerr">
          <img src={props.movieImg} alt="" />
        </div>
        <div className="stackContainer">
          <img src={props.stackOne} alt="" />
          <img src={props.stackTwo} alt="" />
          <img src={props.stackThree} alt="" />
        </div>
      </div>
    </>
  );
}

export default Projectdetails;
