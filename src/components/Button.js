import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize,linkto, className}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to={`${linkto}`} className='btn-mobile' target='_blank'>
            <button className={`btn ${className} ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
};