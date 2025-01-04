import React, { useState } from 'react';
import bloodlineIcon from './assets/heart-drop.png';
import backgroundIcon from './assets/scroll-quill.png';
import houseIcon from './assets/house-banner.png';

function MainColumnLeft() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(''); // Tracks selected option for modal
    const [bloodlineText, setBloodlineText] = useState('Half-blood'); // Tracks the accepted bloodline text

    const descriptions = {
        'Muggle-born': 'Description for Muggle-born',
        'Half-blood': 'Description for Half-blood',
        'Pure-blood': 'Description for Pure-blood'
    };

    const handleButtonClick = () => {
        setIsModalOpen(true);
        setSelectedOption(bloodlineText); // Show current accepted bloodline when modal opens
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const acceptSelection = () => {
        if (selectedOption) {
            setBloodlineText(selectedOption); // Update the accepted bloodline text
        }
        setIsModalOpen(false);
    };

    const handleOverlayClick = (e) => {
        // Close the modal only if the click is on the overlay, not the modal content
        if (e.target.className === 'modal-overlay') {
            closeModal();
        }
    };

    return (
        <div className="main-column-left">
            <div className="options-box">
                <button className="button" onClick={handleButtonClick}>
                    <img className="option-icon" src={bloodlineIcon} alt="Bloodline Icon" />
                    <div className="option-text">
                        <div className="option-title">Bloodline</div>
                        <div className="option-variable">{bloodlineText}</div>
                    </div>
                </button>
                <button className="button">
                    <img className="option-icon" src={backgroundIcon} alt="Background Icon" />
                    <div className="option-text">
                        <div className="option-title">Background</div>
                        <div className="option-variable">Probably Rich</div>
                    </div>
                </button>
            </div>
            {/*Grade 1 Container*/}
            <div className="grade-container">
                <label className="centered-grade-label">Grade 1</label>
                <div className="options-box">
                    <button className="button">
                        <img className="option-icon" src={houseIcon} alt="Banner Icon"/>
                        <div className="option-text">
                            <div className="option-title">House</div>
                            <div className="option-variable">Fuzzquip</div>
                        </div>
                    </button>
                    <button className="button">
                        <img className="option-icon" src={bloodlineIcon} alt="Bloodline Icon"/>
                        <div className="option-text">
                            <div className="option-title">Bloodline Feat</div>
                            <div className="option-variable">Not Selected</div>
                        </div>
                    </button>
                </div>
            </div>

            {/*Grade 2 Container*/}
            <div className="grade-container">
                <label className="centered-grade-label">Grade 2</label>
                <div className="options-box">
                    <button className="button">
                        <img className="option-icon" src={houseIcon} alt="Banner Icon"/>
                        <div className="option-text">
                            <div className="option-title">House Feat</div>
                            <div className="option-variable">Not Selected</div>
                        </div>
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal">
                        <div className="modal-header">
                            Bloodlines
                        </div>
                        <div className="modal-body">
                            <div className="modal-left">
                                <ul>
                                    <li
                                        onClick={() => setSelectedOption('Muggle-born')}
                                        className={selectedOption === 'Muggle-born' ? 'selected' : ''}
                                    >
                                        Muggle-born
                                    </li>
                                    <li
                                        onClick={() => setSelectedOption('Half-blood')}
                                        className={selectedOption === 'Half-blood' ? 'selected' : ''}
                                    >
                                        Half-blood
                                    </li>
                                    <li
                                        onClick={() => setSelectedOption('Pure-blood')}
                                        className={selectedOption === 'Pure-blood' ? 'selected' : ''}
                                    >
                                        Pure-blood
                                    </li>
                                </ul>
                            </div>
                            <div className="modal-right">
                                <p>{selectedOption ? descriptions[selectedOption] : 'Select an option to see the details.'}</p>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={acceptSelection}>Accept</button>
                            <button onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainColumnLeft;