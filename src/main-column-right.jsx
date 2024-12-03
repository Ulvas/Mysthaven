import wandImg from './assets/magic-wand.png';
import speedIMG from './assets/running-shoe.png';
import React, { useState } from 'react';

function MainColumnRight() {
    const [characterName, setCharacterName] = useState("Nameless One");
    const [characterXP, setCharacterXP] = useState(0); // New state for XP
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isXPModalOpen, setIsXPModalOpen] = useState(false); // New state for XP modal

    // Modal handlers
    const openNameModal = () => setIsModalOpen(true);
    const closeNameModal = () => setIsModalOpen(false);

    const openXPModal = () => setIsXPModalOpen(true);
    const closeXPModal = () => setIsXPModalOpen(false);

    const handleOverlayClick = (event, closeModal) => {
        if (event.target.classList.contains("modal-overlay")) {
            closeModal();
        }
    };

    // Name Modal Accept Handler
    const handleAcceptName = () => {
        const inputName = document.getElementById("characterNameInput").value;
        setCharacterName(inputName || "Nameless One");
        closeNameModal();
    };

    // XP Modal Accept Handler
    const handleAcceptXP = () => {
        const inputXP = parseInt(document.getElementById("characterXPInput").value, 10);
        setCharacterXP(isNaN(inputXP) ? 0 : inputXP); // Default to 0 if input is invalid
        closeXPModal();
    };

    return (
        <div className="main-column-right">
            <div className="top-display-row">
                <div className="character-container">
                    <div className="character-main">
                        <div className="character-header">
                            <button className="button-header" onClick={openXPModal}>
                                <div className="option-text">
                                    <div className="option-title">XP</div>
                                    <div className="option-variable">{characterXP}</div>
                                </div>
                            </button>
                            <button className="button-header">
                                <div className="option-text">
                                    <div className="option-title">Grade</div>
                                    <div className="option-variable">1</div>
                                </div>
                            </button>
                            <button className="button-name" onClick={openNameModal}>
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

            {/* Name Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={(e) => handleOverlayClick(e, closeNameModal)}>
                    <div className="modal-2">
                        <div className="modal-2-header">
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
                            <button onClick={handleAcceptName}>Accept</button>
                            <button onClick={closeNameModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* XP Modal */}
            {isXPModalOpen && (
                <div className="modal-overlay" onClick={(e) => handleOverlayClick(e, closeXPModal)}>
                    <div className="modal-2">
                        <div className="modal-2-header">
                            <h2>Edit Character XP</h2>
                        </div>
                        <div className="modal-body">
                            <input
                                id="characterXPInput"
                                type="number"
                                placeholder="Enter XP value"
                                defaultValue={characterXP}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleAcceptXP}>Accept</button>
                            <button onClick={closeXPModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainColumnRight;
