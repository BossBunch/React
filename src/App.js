import Home from './routes/home/home'
import { Routes, Route } from 'react-router-dom';
import CategoryItems from './components/category-items/category-items.component';
import FormDemo from './components/formDemo/formDemo.component';


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home /> } >
                <Route index element={<CategoryItems />} />
                <Route path="/shop" element={<div>This is the shop page  </div>} />
                <Route path="/FormDemo" element={<FormDemo />} />
            </Route>
        </Routes>
        ); 
};

export default App;