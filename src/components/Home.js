import React from 'react';

const Home = () => {

    const connexionOnClickHandler = () => {

    };

    const inscriptionOnClickHandler = () => {

    };

    return(
        <div className="accueil-content">
            <div className="main-hook">
                <div className="first-hook">
                    <div className="lign1"/>
                    <p className="first-lines-hook"><span
                        className="bold-style">Votez pour votre film préféré,</span><br/>
                        et découvrez le classement
                    </p>
                </div>

                <p className="last-lines"> au fil des jours !</p>

                <p className="members-hook">Déjà <span className="members-number">284 056</span> membres</p>

                <div id="home-buttons">
                    <button
                        id="connexion-btn"
                        className="btn"
                        onClick={connexionOnClickHandler}
                    >
                        CONNEXION
                    </button>

                    <button
                        id="inscription-btn"
                        className="btn"
                        onClick={inscriptionOnClickHandler}
                    >
                        INSCRIPTION
                    </button>
                </div>

                <connexionForm />
                <inscriptionForm/>

            </div>
        </div>
    );
};

export default Home;