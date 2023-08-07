import Home from './routes/home/home'
import { Routes, Route } from 'react-router-dom';
import CategoryItems from './components/category-items/category-items.component';
import FormDemo from './components/formDemo/formDemo.component';
import WorkflowParent from './components/workflow-parent/workflow-parent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parent from './components/ParentChild/parent.component';
import ReducerExample from './components/ReducerExample/reducerExample.component';
import ParentRedux from './components/redux/ParentRedux';
import './store/index';


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home /> } >
                <Route index element={<CategoryItems />} />
                <Route path="/shop" element={<div>This is the shop page  </div>} />
                <Route path="/FormDemo" element={<FormDemo />} />
                <Route path="/Workflow" element={<WorkflowParent />} />
                <Route path="/ParentChild" element={<Parent />} />
                <Route path="/Reducer" element={<ReducerExample />} />
                <Route path="/Redux" element={<ParentRedux />} />
                
            </Route>
        </Routes>
        ); 
};

export default App;