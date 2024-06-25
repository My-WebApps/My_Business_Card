import { useState } from "react";

export default function Experiences(){
    const [isVisible, setVisibility] = useState(false)
    function toggleDetails(){
        setVisibility(!isVisible);
    }
    return (
        <div className="px-4">
            <h5 className="fw-bold text-start">Skills</h5>
            {!isVisible? <p>C#|DotNet, Angular, React, Typescript <a href="#" onClick={toggleDetails}>[{isVisible? "less":"more"}]</a></p>:
            <ul>
                <li className="text-start fw-bold">Languages
                    <p className="fw-normal">C#, TypeScript, SCSS, JavaScript, HTML5, JQuery, React.</p>
                </li>
                <li className="text-start fw-bold">Frameworks
                <p className="fw-normal">Angular, Node, Bootstrap, W3CSS.</p></li>
                <li className="text-start fw-bold">Databases
                <p className="fw-normal">MSSQL, MongoDB.</p></li>
                <li className="text-start fw-bold">Tools
                <p className="fw-normal"> VS, VS Code, Git, Postman.</p></li>
                <li className="text-start fw-bold">Cloud Platforms
                <p className="fw-normal"> Azure, AWS.</p></li>
                <a href="#" onClick={toggleDetails}>[{isVisible? "less":"more"}]</a>
            </ul>}
        </div>
    );
}