import React from 'react'

function CardItem({ src, text, label, path, onClick }) {
    return (
        <>
            <li className="cards__item" onClick={onClick}>
                <div className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img src={src} alt='skills' className='cards__item__img' />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                    </div>
                    <i className="fa fa-arrow-right"></i>
                </div>
            </li>
        </>
    )
}

export default CardItem