import { Link } from 'react-router-dom';
import MenuItems from '../../Repeat/MenuItems'
import MenuCover from './MenuCover';

const MenuCatagory = ({ items, title = "", description = "", menuCoverImg = "" }) => {

    // console.log(title);
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


            {
                title && <Link to={`/orderFood/${title.toLowerCase()}`} className='flex items-center justify-center'>
                    <button className="btn btn-outline border-0 border-b-2 capitalize">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            }


        </div>
    );
};

export default MenuCatagory;