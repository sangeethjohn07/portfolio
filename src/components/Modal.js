import React from 'react';
import './Modal.css';

function Modal({ content, closeModal }) {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={closeModal}>&times;</span>
                <div className="modal-header">
                    <h2>{content.text}</h2>
                    <div className="modal-image">
                        <img src={content.pic} alt="Project" />
                    </div>
                </div>
                <h3>{content.label}</h3>
                <p>{content.details}</p>
                <div className="modal-footer">
                    <a href={content.link} className="modal-button" download={content.download} target="_blank" rel="noopener noreferrer">
                        {content.buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Modal;