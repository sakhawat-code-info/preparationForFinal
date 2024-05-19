

const FoodCard = ({ item }) => {
    // console.log(item)
    const { name, recipe, image, category, price } = item;


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} className="relative" alt="Food Img" /></figure>
                <span className="absolute top-5 right-7 bg-red-600 text-white px-3 py-1">${price}</span>
                <div className="card-body text-center">
                    <h2 className="card-title text-center">{name}</h2>
                    <p>{recipe.slice(0, 100)}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-2 capitalize">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;