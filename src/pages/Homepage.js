import React from "react";
import LeftPanel from "../components/LeftPanel";
import CenterPanel from "../components/CenterPanel";
import RightPanel from "../components/RightPanel";

const Homepage = () => {
    return(
        <main className="background grid height100vh">
            <LeftPanel/>
            <CenterPanel/>
            <RightPanel />
        </main>
    )
}

export default Homepage;