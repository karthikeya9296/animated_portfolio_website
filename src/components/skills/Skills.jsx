import React from 'react';

const Skills = () => {

  return (
    <div className="skills">
      <h2>Skills</h2>

      <div className="categories">
        <h3>Programming Languages</h3>
        <ul>
          <li>Python</li>  
          <li>JavaScript</li>
          <li>C++</li>
        </ul>
      </div>

      <div className="categories">
        <h3>Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Django</li>  
        </ul>
      </div>

      <div className="categories">
        <h3>Databases</h3>
        <ul>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

      <div className="categories">
        <h3>Tools</h3>
        <ul>
          <li>Git</li>
          <li>Bash</li>
          <li>Docker</li>
        </ul>  
      </div>

    </div>
  );

}

export default Skills;
