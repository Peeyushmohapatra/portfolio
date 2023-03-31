import "./education.css";

function Education() {
  return (
    <div className="education">
      <div className="innerEducation">
        <div className="educationContainer">
          <div className="upperContainer">
            <div className="institute">
              <li className="upperListInstituteName">Institute Name</li>
            </div>
            <div className="board">
              <li className="upperListInstituteName">Board</li>
            </div>
            <div className="percentage">
              <li className="upperListInstituteName">Percentage</li>
            </div>

            <div className="passout">
              <li className="upperListInstituteName">Passing Year</li>
            </div>
          </div>
          <div className="educationDetails">
            <div className="higherEducation">
            <div className="institute mainContainer">
              <li className="instituteName">HI-TECH INSTITUTE OF TECHNOLOGY</li>
            </div>
            <div className="board mainContainer">
              <li>BPUT</li>
            </div>
            <div className="percentage mainContainer">
              <li>71</li>
            </div>

            <div className="passout mainContainer">
              <li>2021</li>
            </div>
            </div>
            <div className="higherEducation">
            <div className="institute mainContainer">
              <li className="instituteName">C.V.RAMAN INSTITUTE OF TECHNOLOGY</li>
            </div>
            <div className="board mainContainer">
              <li>SCTE & VT</li>
            </div>
            <div className="percentage mainContainer">
              <li>73</li>
            </div>

            <div className="passout mainContainer">
              <li>Passing Year</li>
            </div>
            </div>
            <div className="higherEducation">
            <div className="institute mainContainer">
              <li className="instituteName">DOLPHIN INTERNATIONAL GROUP OF SCHOOL</li>
            </div>
            <div className="board mainContainer">
              <li>CBSE</li>
            </div>
            <div className="percentage mainContainer">
              <li>89</li>
            </div>

            <div className="passout mainContainer">
              <li>Passing Year</li>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
