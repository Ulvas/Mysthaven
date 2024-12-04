import wandImg from './assets/magic-wand.png';
import speedIMG from './assets/running-shoe.png';
import heartImg from './assets/heart-border.png';
import healthImg from './assets/health-fill.png';
import resolveImg from './assets/resolve-fill.png';
import React, { useState } from 'react';


function MainColumnRight() {
    const [characterName, setCharacterName] = useState("Nameless One");
    const [characterXP, setCharacterXP] = useState(0); // New state for XP
    const [grade, setGrade] = useState(1); // State for selected grade
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isXPModalOpen, setIsXPModalOpen] = useState(false); // New state for XP modal
    const [isGradeModalOpen, setIsGradeModalOpen] = useState(false); // Modal state for grade selection
    const [selectedGrade, setSelectedGrade] = useState(grade); // Temp grade selection

    const [maxHP] = useState(12);
    const [maxRP] = useState(9);
    const [currentHP, setCurrentHP] = useState(3);
    const [currentRP, setCurrentRP] = useState(2);

    const adjustHealth = (healthType, operation) => {
        if (healthType === "hp") {
            if (operation === "increase" && currentHP < maxHP) setCurrentHP(currentHP + 1);
            if (operation === "decrease" && currentHP > 0) setCurrentHP(currentHP - 1);
        } else if (healthType === "rp") {
            if (operation === "increase" && currentRP < maxRP) setCurrentRP(currentRP + 1);
            if (operation === "decrease" && currentRP > 0) setCurrentRP(currentRP - 1);
        }
    };


    // Modal handlers
    const openNameModal = () => setIsModalOpen(true);
    const closeNameModal = () => setIsModalOpen(false);

    const openXPModal = () => setIsXPModalOpen(true);
    const closeXPModal = () => setIsXPModalOpen(false);

    const openGradeModal = () => setIsGradeModalOpen(true);
    const closeGradeModal = () => setIsGradeModalOpen(false);

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

    // Handle accepting the grade
    const handleAcceptGrade = () => {
        setGrade(selectedGrade); // Set the selected grade as the new grade
        closeGradeModal();
    }

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
                            <button className="button-header" onClick={openGradeModal}>
                                <div className="option-text">
                                    <div className="option-title">Grade</div>
                                    <div className="option-variable">{grade}</div>
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
                            <div className="icon-container">
                                <img className="shoe-icon" src={speedIMG} alt="Speed"/>
                            </div>
                            <div className="option-text">
                                <div className="option-variable">SPEED</div>
                                <div className="option-variable">25 ft.</div>
                            </div>
                            <div className="icon-container">
                                <img className="wand-icon" src={wandImg} alt="Primary Icon"/>
                            </div>
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
                    <div className="character-secondary">
                        {/* Health Hearts */}
                        <div className="health-container">
                            <div className="heart-wrapper">
                                {/* Health Fill */}
                                <img
                                    className="heart-fill"
                                    src={healthImg}
                                    alt="Health Fill"
                                    style={{
                                        clipPath: `inset(${100 - (currentHP / maxHP) * 100}% 0 0 0)`,
                                    }}
                                />
                                {/* Health Border */}
                                <img className="heart-border" src={heartImg} alt="Heart Border"/>
                                {/* Health Value */}
                                <div className="heart-value">
                                    {currentHP}/{maxHP}
                                </div>
                            </div>

                            {/* Health Adjustment Buttons */}
                            <div className="heart-controls">
                                <button className="adjust-btn" onClick={() => adjustHealth("hp", "decrease")}>
                                    -
                                </button>
                                <button className="adjust-btn" onClick={() => adjustHealth("hp", "increase")}>
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Resolve Hearts */}
                        <div className="health-container">
                            <div className="heart-wrapper">
                                {/* Resolve Fill */}
                                <img
                                    className="heart-fill"
                                    src={resolveImg}
                                    alt="Resolve Fill"
                                    style={{
                                        clipPath: `inset(${100 - (currentRP / maxRP) * 100}% 0 0 0)`,
                                    }}
                                />
                                {/* Resolve Border */}
                                <img className="heart-border" src={heartImg} alt="Heart Border"/>
                                {/* Resolve Value */}
                                <div className="heart-value">
                                    {currentRP}/{maxRP}
                                </div>
                            </div>

                            {/* Resolve Adjustment Buttons */}
                            <div className="heart-controls">
                                <button className="adjust-btn" onClick={() => adjustHealth("rp", "decrease")}>
                                    -
                                </button>
                                <button className="adjust-btn" onClick={() => adjustHealth("rp", "increase")}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
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
            {/* Grade Selection Modal */}
            {isGradeModalOpen && (
                <div className="modal-overlay" onClick={(e) => handleOverlayClick(e, closeGradeModal)}>
                    <div className="modal-2">
                        <div className="modal-2-header">
                            <h2>Select Grade</h2>
                        </div>
                        <div className="modal-body">
                            <div className="grade-options">
                                {[1, 2, 3, 4, 5, 6, 7].map((g) => (
                                    <div
                                        key={g}
                                        className={`grade-option ${selectedGrade === g ? "selected" : ""}`}
                                        onClick={() => setSelectedGrade(g)}
                                    >
                                        Grade {g}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleAcceptGrade}>Accept</button>
                            <button onClick={closeGradeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainColumnRight;
