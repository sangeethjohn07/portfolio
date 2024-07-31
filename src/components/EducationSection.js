import React from 'react'
import { Timeline } from 'antd';
import "./EducationSection.css"

function EducationSection() {
    return (
        <div className='education-container' id="education">
            <div className='education-content'>
            <h1>Education</h1>

                <Timeline>
                    <Timeline.Item>
                        <h3>emlyon business school, France</h3>
                        <h4>2023-2025</h4>
                        <p>Master in Management - Programme Grande École</p>
                        <p>Relevant Coursework: Project Management, Marketing, Strategic Management</p>
                        <p>CGPA: 4.0/4.0</p>
                        <div className='timeline-item-logo'>
                                <img src='portfolio/images/emlyon.png' alt="emlyon business school logo" />
                            </div>
                    </Timeline.Item>
                    <Timeline.Item>
                        <h3>National Institute Of Technology, Calicut, India</h3>
                        <h4>2016-2020</h4>
                        <p>Bachelor of Technology in Computer Science</p>
                        <p>CGPA: 8.37/10</p>
                        <div className='timeline-item-logo'>
                                <img src='portfolio/images/nitc.png' alt="NITC logo" />
                            </div>
                    </Timeline.Item>
                    
                </Timeline>
            </div>
        </div>
    )
}

export default EducationSection
