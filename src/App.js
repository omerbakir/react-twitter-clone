import React from "react";
import Background from "./layout/Background";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Timeline from "./layout/Timeline";
import Content from "./layout/Content";

function App() {
    return (
        <Background>
            <Router>
                <div className="w-72 ">
                    <Sidebar/>
                </div>
                <div className="flex-1 flex-col border-r border-l border-gray-extraLight ">
                    <Content/>
                </div>
                <div className="w-80  ">
                    <Timeline/>
                </div>
            </Router>
        </Background>
    );
}

export default App;
