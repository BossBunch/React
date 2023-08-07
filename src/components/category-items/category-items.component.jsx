import './category-items.styles.scss';
import CategoryItem from '../category-item/category-item.component';
import pullRequests from '../../service/modulePR';
//import PullRequests from '../../service/pullRequest.js';
import { useContext } from 'react';
import UserContext from "../../context/UserContext";
import { useEffect } from 'react';


const CategoryItems = () => {

    useEffect(() => {
        const data = pullRequests.GetPullRequests();
        //const title = PullRequests.GetPullRequests();
        console.log(data);
    }, [])
    
    
    const categories = [
        {
            "id": 1,
            "title": "Hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": "Jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "Sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "Womens",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "Mens",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ];

    const { count, incrementCount } = useContext(UserContext);
    console.log(count);

    const incrementCountHandler = () => {
        incrementCount(count);
    }

    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
            <label>{count}</label>
            <button onClick={incrementCount}>Incremnt Count</button>
        </div>
        )
}

export default CategoryItems;