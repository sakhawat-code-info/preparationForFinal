import MenuCover from "../Menu/MenuCover";
import ourShopBgPhoto from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import FoodCard from "../../Repeat/FoodCard";
import useAllData from "../../useHooks/useAllData";
import { useParams } from "react-router-dom";








const OrderFood = () => {
    const data = useAllData();

    const categories = ["salad", "pizza", "soup", "desserts", "drinks",]
    const { category } = useParams();

    const initialCategory = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialCategory);


    const salad = data.filter(item => item.category === "salad");
    const drinks = data.filter(item => item.category === "drinks");
    const dessert = data.filter(item => item.category === "dessert");
    const pizza = data.filter(item => item.category === "pizza");
    const soup = data.filter(item => item.category === "soup");


    return (
        <div>
            <MenuCover
                coverImg={ourShopBgPhoto}
                title="OUR SHOP"
                description="Would you like to try a dish?"
            ></MenuCover>



            <div className="flex items-center justify-center my-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>




                    <TabPanel>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {
                                salad?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {
                                pizza?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {
                                soup?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {
                                dessert?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {
                                drinks?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>







                </Tabs>
            </div>







        </div>
    );
};

export default OrderFood;