//import { createRandomSong } from "../../data";
//import { addSong, removeSong, store } from '../../store/index';
//import { useDispatch,useSelector } from 'react-redux';

//function SongPlaylist() {
//    const dispatch = useDispatch();

//    const songPlaylist = useSelector((state) => {
//        return state.songs;
//    });

//    const handleSongAdd = (song:string) => {
//        console.log(song);
//        const action = addSong(song);
//        console.log(action);
//        dispatch(action);
//        console.log(store.getState());

//    };
//    const handleSongRemove = (song: string) => {
//        dispatch(removeSong(song));
//        console.log(store.getState());
//    };

//    const renderedSongs = songPlaylist.map((song: string) => {
//        return (
//            <li key={song}>
//                {song}
//                <button
//                    onClick={() => handleSongRemove(song)}
//                    className="button is-danger"
//                >
//                    X
//                </button>
//            </li>
//        );
//    });

//    return (
//        <div className="content">
//            <div className="table-header">
//                <h3 className="subtitle is-3">Song Playlist</h3>
//                <div className="buttons">
//                    <button
//                        onClick={() => handleSongAdd(createRandomSong())}
//                        className="button is-link"
//                    >
//                        + Add Song to Playlist
//                    </button>
//                </div>
//            </div>
//            <ul>{renderedSongs}</ul>
//        </div>
//    );
//}

//export default SongPlaylist;
