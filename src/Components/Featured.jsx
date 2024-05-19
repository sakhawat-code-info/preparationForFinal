import SectionTitle from "../Repeat/SectionTitle";
import featuredImg from '../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="py-8 bg-fixed my-10 featured-img">

            <SectionTitle
                subTitle={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className="flex items-center justify-center gap-10 max-w-3xl mx-auto py-10">
                <div>
                    <img src={featuredImg} className="" alt="" />
                </div>
                <div className="space-y-1">
                    <h3>March 20, 2023</h3>
                    <h1 className="uppercase text-xl">WHERE CAN I GET SOME?</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur om nis ullam maxime tenetur.</p>
                    <button className="btn btn-outline mt-4 border-0 border-b-2">Read More</button>
                </div>
            </div>



        </div>
    );
};

export default Featured;