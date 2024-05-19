import { Helmet } from 'react-helmet-async';
import MenuCover from './MenuCover';


import useAllData from '../../useHooks/useAllData';
import SectionTitle from '../../Repeat/SectionTitle';
import MenuCatagory from './MenuCatagory';

import menuCoverImg from '../../assets/menu/banner3.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'






const Menu = () => {

    const data = useAllData();

    const salad = data.filter(item => item.category === "salad");
    // const drinks = data.filter(item => item.category === "drinks");
    // const popular = data.filter(item => item.category === "popular");
    const dessert = data.filter(item => item.category === "dessert");
    const pizza = data.filter(item => item.category === "pizza");
    const soup = data.filter(item => item.category === "soup");
    const offered = data.filter(item => item.category === "offered");



    return (
        <div className="">
            <Helmet>
                <title>12 || Menu</title>

            </Helmet>

            <MenuCover
                coverImg={menuCoverImg}
                title="OUR MENU"
                description="Would you like to try a dish?"
            ></MenuCover>


            <SectionTitle
                subTitle={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>


            <MenuCatagory
                items={offered}
            ></MenuCatagory>


            <MenuCatagory
                menuCoverImg={menuCoverImg}
                title="DESSERTS"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={dessert}
            ></MenuCatagory>


            <MenuCatagory
                menuCoverImg={pizzaImg}
                title="PIZZA"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={pizza}
            ></MenuCatagory>

            <MenuCatagory
                menuCoverImg={saladImg}
                title="SALADS"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={salad}
            ></MenuCatagory>

            <MenuCatagory
                menuCoverImg={soupImg}
                title="SOUPS"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={soup}
            ></MenuCatagory>









        </div>
    );
};

export default Menu;