import * as React from "react";
import Selecto from "react-selecto";

export default function App() {
    const cubes = [];

    for (let i = 0; i < 96; ++i) {
        cubes.push(i);
    }
    return <div className="app">
        <div className="container">
            <h1>Continue to select.</h1>
            <p className="description">You can continue to select with the currently selected target.</p>
            <Selecto
                dragContainer={".elements"}
                selectableTargets={[".selecto-area .cube"]}
                hitRate={0}
                selectByClick={true}
                selectFromInside={true}
                continueSelect={true}
                ratio={0}
                onSelect={e => {
                    e.added.forEach(el => {
                        el.classList.add("selected");
                    });
                    e.removed.forEach(el => {
                        el.classList.remove("selected");
                    });
                }}
            ></Selecto>

            <div className="elements selecto-area" id="selecto1">
                {cubes.map(i => <div className="cube" key={i}></div>)}
            </div>
            <div className="empty elements"></div>
        </div>
    </div>;
}