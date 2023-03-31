import "./home.css";
import Image from "../../Image/Image.png";

function Home() {
  return (
    <div className="home">
      <div className="dataContainer">
        <div className="leftContainer">
          <img src={Image} alt="" />
        </div>

        <div className="trial"></div>

        <div className="rightContainer">
          <p className="pTag">Hi, I'm</p>
          <h2 className="name">Peeyush Mohapatra</h2>
          <p className="pTag">@ Front end-Developer</p>
          <div className="iconContainer">
            <a href="https://github.com/Peeyushmohapatra">
              <i class="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/peeyushmohapatra/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
