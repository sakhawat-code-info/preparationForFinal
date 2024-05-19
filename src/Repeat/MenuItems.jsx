
const MenuItems = ({ item }) => {

    const { name, recipe, image, price } = item;

    return (
        <div className="flex gap-3">
            <img className="w-[120px]" style={{ borderRadius: '0px 200px 200px 200px' }} src={image} alt="" />
            <div>
                <h2 className="uppercase font-extrabold text-xl">{name}------------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-red-400 font-extrabold"> ${price}</p>
        </div>
    );
};

export default MenuItems;


