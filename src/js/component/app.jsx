import React from "react";
import Navbar from "/workspaces/react-hello-fs86-cristian/src/js/component/navbar.jsx";
import Jumbotron from "/workspaces/react-hello-fs86-cristian/src/js/component/jumbotrosn.jsx";
import Card from "/workspaces/react-hello-fs86-cristian/src/js/component/card.jsx";
import Footer from "/workspaces/react-hello-fs86-cristian/src/js/component/footer.jsx";

import "/workspaces/react-hello-fs86-cristian/src/styles/app.css";

const App = () => {
    return (
        <div id="root">
            <Navbar />
            <Jumbotron />
            <Card />
            <Footer />
        </div>
    );
};

export default App;
