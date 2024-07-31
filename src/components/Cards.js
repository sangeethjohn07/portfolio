import React, { useState } from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Modal from './Modal'

function Cards() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleCardClick = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const cardsData = [
    { src: 'portfolio/images/react.png', text: 'Personal Portfolio (React JS)', label: 'Personal', link: '/', pic: 'portfolio/images/react.png', buttonText: 'Go to website', details: 'Developed a dynamic and responsive personal portfolio website using React.js. This project showcases my professional journey, skills, and accomplishments in a user-friendly and visually appealing manner. Utilizing React.js, I implemented smooth navigation, interactive elements, and a modern design to enhance user engagement.' },
    { src: 'portfolio/images/revair.png', text: 'Business Creation Project', label: 'Emlyon', link: 'https://docs.google.com/presentation/d/1N7s5UezL5FX0wa3T7NNijkrKdtFiFTPv/export/pptx', pic: 'portfolio/images/revair.png', buttonText: 'Download the presentation' , details: 'Pitched a business proposal for a product in home appliance sector, strategically targeting French market, as part of entrepreneurial project, synergizing with a cross-cultural team of 5 members by conducting in-depth financial and strategic analysis' },
    { src: 'portfolio/images/uber.png', text: 'Strategic Analysis Project', label: 'Emlyon', link: 'https://docs.google.com/presentation/d/1ni9hjeVTdnKhqIl-NkaRblPnIEQhBWh5/export/pptx', pic: 'portfolio/images/uber.png', buttonText: 'Download the presentation', details: 'Conducted a comprehensive strategic analysis of Uber as part of a Strategic Management course at emlyon. The project involved an in-depth examination of Uber’s business model, market position, and competitive landscape, utilizing frameworks such as SWOT analysis, PESTEL analysis, and Porter’s Five Forces. The analysis provided actionable recommendations to enhance Uber’s technology, expand into new markets, address regulatory challenges, and diversify revenue streams, with the goal of strengthening Uber’s competitive edge and fostering sustainable growth.' },
    { src: 'portfolio/images/ragam.png', text: 'Registration Head, Ragam', label: 'NITC', link: 'https://ragam.co.in/', pic: 'portfolio/images/ragam.png', buttonText: 'Go to website', details: 'As the Registration Head for Ragam 2020, the annual cultural fest of the National Institute of Technology, Calicut, I led a team of over 50 members in managing event registrations and financial operations. Ragam is one of South India’s largest cultural fests, attracting around 80,000 attendees. My role involved coordinating the registration process, ensuring seamless participant experience, and overseeing the financial management to maintain budgetary discipline. This experience honed my leadership and organizational skills, and my ability to handle large-scale events efficiently.' },
    { src: 'portfolio/images/clubmath.png', text: 'Senior Executive, Club Mathematica', label: 'NITC', link: 'https://clubmathematica.com/', pic: 'portfolio/images/clubmath.png', buttonText: 'Go to website', details: 'As a Senior Executive of Club Mathematica, the technical club at the National Institute of Technology, Calicut, I played a pivotal role in organizing Infinitum, a state-level logical quizzing event that engaged approximately 15,000 participants. I led a 25-member team, secured 20% sponsorship from a prestigious educational institution, and worked closely with the marketing team to ensure the event’s success. Additionally, I coordinated registration for Locus’19, the annual math-based summit, enhancing its prominence and participation. This position developed my event management, sponsorship negotiation, and teamwork skills.' },
  ];

  return (
    <div className='cards' id="projects">
        <h1>Projects and Achievements</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    {cardsData.map((card, index) => (
                      <CardItem 
                        key={index} 
                        src={card.src} 
                        text={card.text} 
                        label={card.label} 
                        path={card.path} 
                        onClick={() => handleCardClick(card)} 
                      />
                    ))}
                </ul>
            </div>
            <div className="publication-card">
            <div className="publication-content">
                <h1>Publication</h1>
                <h2>SART-Res-UNet: Fan Beam CT Image Reconstruction from Limited Projections Using Attention-Enabled Residual U-Net</h2>
                <h3>Asian Conference on Machine Learning 2023</h3>
                <p>
                Our study addresses the critical issue of reducing radiation exposure in CT scans without compromising image quality. By combining the Simultaneous Algebraic Reconstruction Technique (SART) with a Residual U-Net network, we developed a model that generates high-quality images from a limited number of sinograms. Tested on head and neck CT images, our model achieved a Peak Signal-to-Noise Ratio (PSNR) of 70.23 and a Structural Similarity Index Measure (SSIM) of 0.99, ensuring minimal radiation exposure for patients during repeated CT imaging sequences, essential in radiotherapy.
                The benefits of this project include significantly lowering radiation exposure for patients, enhancing diagnostic accuracy, and ensuring safer, more efficient repeated CT imaging sequences essential in radiotherapy.
                </p>
                <div className="publication-read-btn">
                <a href='https://www.semanticscholar.org/author/Sangeeth-John/2300475170' target="_blank" rel="noopener noreferrer">
                    <button className="btn-publication">
                        Read the paper
                    </button>
                </a>
            </div>
            </div>
        </div>
        </div>
        {modalOpen && <Modal content={modalContent} closeModal={closeModal} />}
    </div>
  )
}

export default Cards