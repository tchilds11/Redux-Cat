import { setActivity } from '../redux/actions';
import { connect } from 'react-redux';

const PlayButton = (props) => (
    <>
        <button onClick={() => props.handleClick('playing')}>Playing</button>
    </>
);


const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (activity) => {
            dispatch(setActivity(activity));
        }
    }
}
 
export default connect(null, mapDispatchToProps)(PlayButton);