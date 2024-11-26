import React from "react";
import "/workspaces/react-hello-fs86-cristian/src/styles/jumbotron.css";

const Jumbotron = () => {
    return (
        <div className="jumbotron text-center my-5">
            <h1 className="display-4">Bienvenido a mi Sitio</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore in ut dicta ab, maiores numquam iure, voluptatem vitae eius distinctio laboriosam tenetur excepturi similique minus odio possimus quam cupiditate?
            </p>
            <a className="jubotron__btn btn btn-primary btn-lg " href="#" role="button">
                Call to Action!
            </a>
        </div>
    );
};

export default Jumbotron;
