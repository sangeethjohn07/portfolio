import React from 'react';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className="profile-card" id="profileCard">
      <div className="profile-content">
        <img src='images/profilePic.png' alt="Sangeeth John" className="profile-image" />
          <p>An aspiring product management professional with a solid background in software engineering and management. With three years of hands-on experience at Cisco AppDynamics, I excel in translating customer needs into innovative solutions and driving product roadmaps. I thrive in dynamic environments where I can lead cross-functional teams, analyse market trends, and drive data-driven decision making to deliver impactful products. Throughout my academic and professional career, I honed my leadership skills by leading various teams, which has further strengthened my ability to collaborate effectively and drive results.
            <br /><br />
            I'm always open to connecting with like-minded professionals and industry experts in the field of product management. Whether you're interested in discussing potential collaborations, sharing insights, or simply connecting, feel free to reach out. Let's collaborate and drive innovation together!</p>
      </div>
    </div>
  );
}

export default ProfileCard;