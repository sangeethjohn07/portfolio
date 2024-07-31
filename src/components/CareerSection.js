import React from 'react';
import { Timeline } from 'antd';
import './CareerSection.css';

function CareerSection() {
  return (
    <div className='career-container'>
      <div className='career-content'>
        <h1>Work Experience</h1>
        <Timeline>
          <Timeline.Item>
            <h3>Cisco Appdynamics</h3>
            <h4>2020-2023</h4>
            <p>Software Engineer II</p>
            <div className='work-exp-list'>
              <ul>
                <li>
                  Implemented a comprehensive testing framework and guided a team of 4 engineers to ensure quality of C-SaaS application
                  monitoring tools for Dynamic Languages; achieved 100% test automation and reduced bug count by 40%
                </li>
                <li>
                  Diagnosed gaps in observability within Opentelemetry open-source project, led initiative to improve test coverage and achieved
                  a 20% increase in error detection and troubleshooting efficiency
                </li>
                <li>
                  Transitioned to Data Platform team, playing a key role in releasing Cloud Native Application Observability
                  (CNAO) by incorporating a 30% increase in automated test cases, enhancing overall product quality and reliability
                </li>
                <li>
                  Collaborated with cross-functional teams for monthly product releases, while initiating and leading resiliency testing for CNAO
                  reducing system downtime by 60%
                </li>
              </ul>
            </div>
            <div className='career-logo'>
              <img src='portfolio/images/appd.png' alt='Cisco Appdynamics logo' />
            </div>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}

export default CareerSection;