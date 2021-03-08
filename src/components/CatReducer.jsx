import Output from '../containers/OutputContainer';
import Eat from '../containers/EatingContainer';
import Play from '../containers/PlayingContainer';
import Nap from '../containers/NappingContainer';

const CatReducer = () => (
    <>
        <h1>Cat App</h1>
            <Output />
            <Eat />
            <Nap />
            <Play />
    </>
);

export default CatReducer;