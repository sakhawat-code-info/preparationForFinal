import MenuItems from '../../Repeat/MenuItems'
import MenuCover from './MenuCover';

const MenuCatagory = ({ items, title, description, menuCoverImg }) => {
    return (
        <div className='my-10'>
            {
                title && <MenuCover
                    coverImg={menuCoverImg}
                    title={title}
                    description={description}
                ></MenuCover>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                {
                    // MenuItems
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }

            </div>
        </div>
    );
};

export default MenuCatagory;