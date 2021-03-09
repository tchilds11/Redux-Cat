import Output from '../containers/OutputContainer';
import EatButton from './Eat';
import PlayButton from './Play';
import NapButton from './Nap';
import ChangeName from './ChangeName';

const CatReducer = () => (
    <>
        <h1>Cat App</h1>
            <ChangeName />
            <Output />
            <EatButton />
            <NapButton />
            <PlayButton />
    </>
);

export default CatReducer;