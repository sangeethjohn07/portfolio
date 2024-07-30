import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Projects and Achievements</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src='images/portfolio.png' text='Personal Portfolio (React JS)' label='Personal' path='/skills' />
                    <CardItem src='images/revair.png' text='Business Creation Project' label='Emlyon' path='/skills' />
                    <CardItem src='images/uber.png' text='Strategic Analysis Project' label='Emlyon' path='/skills' />
                    <CardItem src='images/ragam.png' text='Registration Head, Ragam' label='NITC' path='/skills' />
                    <CardItem src='images/clubmath.png' text='Senior Executive, Club Mathematica' label='NITC' path='/skills' />
                </ul>
            </div>
        </div>
        <div className="publication-card">
            <div className="publication-content">
                <h1>Publications</h1>
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
  )
}

export default Cards
