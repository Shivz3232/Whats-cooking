import React from "react";

import loadingImage from "../loading.svg";

function Menu({ menu }) {
    if (!menu)
        return (
            <main className="bg-black min-h-screen p-12">
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                    <img
                        src={loadingImage}
                        alt="Loading icon"
                        className="w-20 h-20"
                    />
                </section>
            </main>
        );

    return (
        <main className="relative bg-black text-white min-h-screen p-12">
            {menu &&
                menu.items.map((item, index) => (
                    <div className="p-1 container mx-auto relative" key={index}>
                        <section className="bg-white rounded-lg shadow-2xl lg:flex p-20">
                            <div className="text-lg flex flex-col justify-center">
                                <h1 className="cursive text-6xl text-black mb-4">
                                    {item}
                                </h1>
                            </div>
                        </section>
                    </div>
                ))}
        </main>
    );
}

export default Menu;
