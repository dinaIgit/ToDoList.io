import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Loader from './components/Loader';
import {useDispatch, useSelector} from "react-redux";
import {appSelector, authSuccess} from "./todo_store/appReducer/AppReducer";
import Auth from "./components/Auth";
import {useEffect} from "react";

function App() {
    const isLoading = useSelector(appSelector).isLoading;
    const auth = useSelector(appSelector).auth;
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(authSuccess())
    }, [dispatch])

    return (
        <div className="App">
            {auth ?
                <>
                    <h1>My ToDo List</h1>
                    <Header/>
                    <hr/>
                    <TodoList/>
                </> : <Auth/>
            }
            {isLoading && <Loader/>}
        </div>
    );
}

export default App;
//