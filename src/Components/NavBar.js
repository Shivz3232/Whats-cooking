import React from "react";

function NavBar({ changeMess }) {
    return (
        <header className="bg-black text-white font-bold">
            <nav>
                <div>
                    <h1 className="py-10 text-4xl tracking-widest">
                        PES Boys Hostel Mess Menu
                    </h1>
                </div>
                <div className="container mx-auto">
                    <span
                        className="inline-flex py-4 px-4 mx-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => changeMess("southMess")}
                    >
                        <h2>South Mess</h2>
                    </span>
                    <span
                        className="inline-flex py-4 px-4 mx-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => changeMess("northMess")}
                    >
                        <h2>North Mess</h2>
                    </span>
                    <span
                        className="inline-flex py-4 px-4 mx-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => changeMess("foodCourt")}
                    >
                        <h2>Food Court</h2>
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
