



const SectionTitle = ({ subTitle, heading }) => {
    return (
        <div className="mx-auto w-4/12 text-center my-5">
            <h4 className="text-[#D99904] mb-2">---{subTitle}---</h4>
            <h1 className="border-y-2 py-4 text-4xl uppercase">{heading}</h1>
        </div>
    );
};

export default SectionTitle;