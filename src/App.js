import { useState } from "react";

import "./App.css";

import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";

function App() {
    const [menu, setMenu] = useState(null);

    function fetchMenu(messName) {
        const menu = {
            southMess: {
                items: ["Roti", "Channa", "Tamrind Rice"],
            },
            northMess: {
                items: ["Whit Rice", "Sambar", "Papad"],
            },
            foodCourt: {
                items: ["Roti", "Paneer"],
            },
        };

        return menu[messName];
    }

    function changeMess(messName) {
        setMenu(fetchMenu(messName));
    }

    return (
        <div className="App">
            <NavBar changeMess={(messName) => changeMess(messName)} />
            <Menu menu={menu} />
        </div>
    );
}

export default App;
