//import "./styles.css";
//import MoviePlaylist from "./MoviePlaylist";
//import SongPlaylist from "./SongPlaylist";
//import { useDispatch } from 'react-redux';
//import { clearMovies, clearSongs, store } from '../../store/index';

//export default function ParentRedux() {
//    const dispatch = useDispatch();
//    const handleResetClick = () => {
//        console.log('in Reset button');
//        dispatch(clearMovies());
//        dispatch(clearSongs());
//        console.log(store.getState());
//    };

//    return (
//        <div className="container is-fluid">
//            <button onClick={() => handleResetClick()} className="button is-danger">
//                Reset Both Playlists
//            </button>
//            <hr />
//            <MoviePlaylist />
//            <hr />
//            <SongPlaylist />
//        </div>
//    );
//}
