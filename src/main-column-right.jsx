import wandImg from './assets/magic-wand.png';
import speedIMG from './assets/running-shoe.png';
import React, { useState } from 'react';

function MainColumnRight() {
    const [characterName, setCharacterName] = useState("Nameless One");
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    // Handle opening and closing the modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Handle overlay click to close the modal
    const handleOverlayClick = (event) => {
        if (event.target.classList.contains("modal-overlay")) {
            closeModal();
        }
    };

    // Handle accepting the name
    const handleAccept = () => {
        const inputName = document.getElementById("characterNameInput").value;
        setCharacterName(inputName || "Nameless One"); // Default to "Nameless One" if input is empty
        closeModal();
    };

    return (
        <div className="main-column-right">
            <div className="top-display-row">
                <div className="character-container">
                    <div className="character-main">
                        <div className="character-header">
                            <button className="button-header">
                                <div className="option-text">
                                    <div className="option-title">Grade</div>
                                    <div className="option-variable">1</div>
                                </div>
                            </button>
                            <button className="button-header">
                                <div className="option-text">
                                    <div className="option-title">XP</div>
                                    <div className="option-variable">0</div>
                                </div>
                            </button>
                            <button className="button-name" onClick={openModal}>
                                <div className="option-text">
                                    <div className="option-title">Character Name</div>
                                    <div className="option-variable">{characterName}</div>
                                </div>
                            </button>
                        </div>
                        <div className="character-primary">
                            <img className="primary-icon" src={speedIMG} alt="Speed" />
                            <div className="option-text">
                                <div className="option-variable">SPEED</div>
                                <div className="option-variable">25 ft.</div>
                            </div>
                            <img className="primary-icon" src={wandImg} alt="Primary Icon" />
                            <div className="stat-text">
                                <div className="stat-name">MAGIC</div>
                                <div className="stat-value">+1</div>
                            </div>
                            <div className="stat-text">
                                <div className="stat-name">STR</div>
                                <div className="stat-value">+2</div>
                            </div>
                            <div className="stat-text">
                                <div className="stat-name">DEX</div>
                                <div className="stat-value">-1</div>
                            </div>
                            <div className="stat-text">
                                <div className="stat-name">MIND</div>
                                <div className="stat-value">-1</div>
                            </div>
                            <div className="stat-text">
                                <div className="stat-name">EMP</div>
                                <div className="stat-value">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="character-secondary"></div>
                </div>
                <div className="condition-box"></div>
            </div>
            <div className="bottom-display-row">
                <div className="skills-container"></div>
                <div className="spells-container"></div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2>Edit Character Name</h2>
                        </div>
                        <div className="modal-body">
                            <input
                                id="characterNameInput"
                                type="text"
                                placeholder="Enter character name"
                                defaultValue={characterName}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleAccept} className="button">
                                Accept
                            </button>
                            <button onClick={closeModal} className="button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainColumnRight;
