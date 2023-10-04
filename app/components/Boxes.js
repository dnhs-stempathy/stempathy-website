import React from 'react';

const Boxes = () => {
    const boxStyle = {
        height: '400px',
        minHeight: '200px',
    };

    return (
        <div className="flex flex-col md:flex-row justify-center md:gap-4 mx-auto">
            <div className="bg-customGreen p-4 md:p-8 m-4 rounded-lg text-center md:w-1/3" style={boxStyle}>
                <div className="h-full flex flex-col justify-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">Vision</h2>
                    <p className="text-sm md:text-base mb-2">ALL for STEM and STEM for ALL</p>
                </div>
            </div>

            <div className="bg-customGray p-4 md:p-8 m-4 rounded-lg text-center md:w-1/3" style={boxStyle}>
                <div className="h-full flex flex-col justify-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">Mission</h2>
                    <p className="text-sm md:text-base mb-2">Elevating humanity by educating and inspiring children around the globe</p>
                </div>
            </div>

            <div className="bg-customTeal p-4 md:p-8 m-4 rounded-lg text-center md:w-1/3" style={boxStyle}>
                <div className="h-full flex flex-col justify-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-black">Values</h2>
                    <ul className="text-black">
                        <li>Teamwork</li>
                        <li>Respect</li>
                        <li>Inclusion</li>
                        <li>Excellence</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Boxes;
