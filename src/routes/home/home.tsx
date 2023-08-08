import '../../App.css';
//import CategoryItems from '../../components/category-items/category-items.component'
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import { Fragment } from 'react';

const Home = () => {
    

    return (
        <Fragment>
            <div>
                <p>this is the header and navigation bar </p>
            </div>
            <NavigationBar />
            <br/>
            <div>
                <Outlet />
            </div>
           

        </Fragment>
        
    );
};

export default Home;