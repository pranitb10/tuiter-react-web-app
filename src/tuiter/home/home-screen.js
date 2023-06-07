import React from "react";
import TuitsList from "../tuits/TuitList";
import WhatsHappening from "../whatsHappening";

const HomeScreen = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
}
export default HomeScreen;