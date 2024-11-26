import React from "react";
import "/workspaces/react-hello-fs86-cristian/src/styles/card.css";

const Card = () => {
    
    const cardsData = [
        {
            id: 1,
            img: "https://tse1.mm.bing.net/th?id=OIP.BdNASVOPaOnq7hemkPEbbQAAAA&pid=Api&P=0&h=180",
            title: "Luigi",
            text: "Bienvenido amigo.",
        },
        {
            id: 2,
            img: "https://via.placeholder.com/500x325",
            title: "Card 2",
            text: "This is the second card.",
        },
        {
            id: 3,
            img: "https://via.placeholder.com/500x325",
            title: "Card 3",
            text: "This is the third card.",
        },
        {
            id: 4,
            img: "https://via.placeholder.com/500x325",
            title: "Card 4",
            text: "This is the fourth card.",
        },
    ];

    return (
        <div className="card-container d-flex flex-wrap justify-content-around">
            {cardsData.map((card) => (
                <div className="card" style={{ width: "18rem" }} key={card.id}>
                    <img
                        src={card.img}
                        className="card__img card-img-top"
                        alt={`Image for ${card.title}`}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                        <a href="#" className="btn btn-primary">
                           Find out more!
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;

