




const MenuCover = ({ coverImg, title, description }) => {



    return (
        <div>
            <div className="hero min-h-[598px]" style={{ backgroundImage: `url("${coverImg}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-[#15151599] px-[298px]  py-[100px]">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCover;