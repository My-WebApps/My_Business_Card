import { useState } from "react";

export default function About() {
    const [isVisible, setVisibility] = useState(false)
    function toggleDetails(){
        setVisibility(!isVisible);
    }
    return (
        <div className="px-4">
            <h5 className="fw-bold text-start">About</h5>
            <p>8+ years of experience in industry and working as a Full stack Lead Developer in end-to-end application development life cycle. 
            {isVisible &&<span> Extensive experience in developing Web interfaces using Angular, React, HTML5, SCSS, Typescript and Bootstrap. 
                Experience in leading a team of Offshore and Onsite, guide and mentor with the standards and best practices.
                Proficiency in developing multi-tier applications using C# and DOTNET.</span>}<a href="#" onClick={toggleDetails}>[{isVisible? "<<":">>"}]</a></p>
        </div>
    );
}