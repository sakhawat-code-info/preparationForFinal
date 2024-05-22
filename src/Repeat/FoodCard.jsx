import axios from "axios";
import useAuthInfo from "../useHooks/useAuthInfo";


const FoodCard = ({ item }) => {

    const { user } = useAuthInfo();
    // console.log(user)

    const { name, recipe, image, price, _id } = item;

    const handleOrderFoodItem = (foodOrdered) => {

        if (user && user.email) {
            console.log(foodOrdered);
            const orderItemInfo = {
                menuOrderId: _id,
                orderedBy: user.email,
                orderTime: new Date("2015-03-25"),
            }
            // this is a changed

            axios.post('http://localhost:5000/foodOrdered', orderItemInfo)
                .then(res => console.log(res.data))
        }


    }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} className="relative" alt="Food Img" /></figure>
                <span className="absolute top-5 right-7 bg-red-600 text-white px-3 py-1">${price}</span>
                <div className="card-body text-center">
                    <h2 className="card-title text-center">{name}</h2>
                    <p>{recipe.slice(0, 100)}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleOrderFoodItem(item)} className="btn btn-outline border-0 border-b-2 capitalize">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;