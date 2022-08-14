// 출처: https://codesandbox.io/s/keen-leaf-4ds0z?file=/src/App.tsx

import * as React from "react";
import Selecto from "react-selecto";

export default function App() {
    const slots = [];

    for (let i = 0; i < 96; ++i) {
        slots.push(i);
    }
    return <div className="app">
        <div className="container">
            <Selecto
                dragContainer={".slot"}
                selectableTargets={[".selecto-area .slot"]}
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
            />

            <div className="select-container">
                <div className="elements selecto-area" id="selecto1">
                    {slots.map(i => {
                        let sep = "";
                        if (i % 4 === 3) {
                            sep = " solid";
                        } else if (i % 4===1) {
                            sep = " dotted";
                        }
                            return <div className={"slot" + sep} key={i}></div>
                        
                }
                    )}
                    
                </div>
            </div>
            <div className="empty elements"></div>
        </div>
    </div>;
}