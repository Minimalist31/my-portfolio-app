import React from "react";
import "./Learn.css";
const Learn = () => {
  return (
    <section>
      <div className="skills">
        <div className="skill-title">
          EDUCATION
          <p>
            <ul className="skills">
              <li>
                DON BOSCO SCHOOL Gumla,Jharkhand
                <p className="school-details">
                  {"    "}Attended from 2009-2019.
                  <br />
                  Achieved an academic score of 87.8%.
                  <br />
                  Served as the Assistant Headgirl and House Captain,fostering
                  leadership,teamwork,and community engagement.
                </p>
              </li>
            </ul>
          </p>
          <p>
            <ul className="skills">
              <li>
                St.Xavier's School Ranchi,Jharkhand
                <p className="school-details">
                  {"    "}High SChool Diploma <br />
                  Attended from 20019-2021.
                  <br />
                  Achieved an academic score of 84%.
                </p>
              </li>
            </ul>
          </p>
          <p>
            <ul className="skills">
              <li>
                Presidency College Kempapura,Bangalore
                <p className="school-details">
                  {"    "}Enrollment:2021-present.
                  <br />
                  Pursuing Bachelor Of Computer Application.
                  <br />
                  Maintaining an academic record with an average score of --%
                  across all semesters.
                </p>
              </li>
            </ul>
          </p>
        </div>
        <div className="skill-title">
          KEY SKILLS
          <p>
            <ul className="skills">
              <li>
                C<div className="level">Intermediate</div>
              </li>
              <li>
                DBMS
                <div className="level">Beginner</div>
              </li>
              <li>
                Java
                <div className="level">Advanced</div>
              </li>
              <li>
                Python
                <div className="level">Intermediate</div>
              </li>
              <li>
                HTML,CSS,JavaScript
                <div className="level">Advanced</div>
              </li>
              <li>
                Front-end Framework:React
                <div className="level">Intermediate</div>
              </li>
              <li>
                Php
                <div className="level">Novice</div>
              </li>
            </ul>
          </p>
        </div>
        <div className="skill-title">
          SOFT SKILLS
          <p>
            <ul className="skills">
              <li>Communication skills</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
              <li>Adaptibility</li>
              <li>Responsive</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Learn;
