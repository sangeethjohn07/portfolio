import React from 'react'
import "./SkillsSection.css"

function SkillsSection() {
    return (
        <div className='skills-container'>
        <div className='skills-box'>
        <h1>Skills and Interests</h1>
        <div className='skills-content'>
          <div className='skills-section'>
            <h2>Languages</h2>
            <ul>
              <li>English (IELTS 8.0)</li>
              <li>French (Beginner)</li>
              <li>Malayalam </li>
              <li>Hindi </li>
            </ul>
          </div>
          <div className='skills-section'>
            <h2>IT Skills</h2>
            <ul>
              <li>Microsoft Excel</li>
              <li>Jira</li>
              <li>Figma</li>
              <li>Splunk</li>
              <li>Tableau</li>
              <li>Canva</li>
              <li>VBA</li>
            </ul>
          </div>
          <div className='skills-section'>
            <h2>Technical Skills</h2>
            <ul>
              <li>Java</li>
              <li>C/C++</li>
              <li>Python</li>
              <li>Docker and Kubernetes</li>
              <li>MERN stack (MongoDB, Express.js, React, Node.js)</li>
              <li>AWS</li>
              <li>R Programming</li>
            </ul>
          </div>
          <div className='skills-section'>
            <h2>Interests</h2>
            <ul>
              <li>Investments and Share markets</li>
              <li>Traveling</li>
              <li>Table Tennis, Football, badminton</li>
              <li>Chess</li>
              <li>Gaming</li>
            </ul>
          </div>
          <div className='skills-section'>
            <h2>Certifications</h2>
            <ul>
              <li>Data Storytelling for Business</li>
              <li>Foundations Of Project Management (Google Professional Certification)</li>
              <li>Front-End Web Development with ReactFront-End Web Development with React</li>
            <li>Front-End Web UI Frameworks and Tools: Bootstrap 4Front-End Web UI Frameworks and Tools: Bootstrap 4</li>
            <li>Server-side Development with NodeJS, Express and MongoDBServer-side Development with NodeJS, Express and MongoDB</li>
            <li>Accenture North America - Data Analytics and Visualization Job Simulation - Forage</li>
            </ul>
          </div>
        </div>
        </div>
      </div>

    )
}

export default SkillsSection
