import SectionTitle from "./SectionTitle";
import useAllData from "../useHooks/useAllData";
import MenuItems from "./MenuItems";


const PopularMenu = () => {

    const data = useAllData();

    const popularData = data.filter(singleData => singleData.category === 'popular');

    // console.log(popularData);



    return (
        <section>
            <SectionTitle
                subTitle={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    // MenuItems
                    popularData.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }

            </div>


        </section>
    );
};

export default PopularMenu;