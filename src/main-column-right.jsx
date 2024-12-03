import React from "react";

function mainColumnRight (){
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
                            <button className="button-name">
                                <div className="option-text">
                                    <div className="option-title">Character Name</div>
                                    <div className="option-variable">Nameless One</div>
                                </div>
                            </button>
                        </div>
                        <div className="character-primary">
                            
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
        </div>
    );
}

export default mainColumnRight;