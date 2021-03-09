import { setActivity } from '../redux/actions';
import { connect } from 'react-redux';

const NapButton = (props) => (
    <>
        <button onClick={() => props.handleClick('napping')}>Napping</button>
    </>
);


const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (activity) => {
            dispatch(setActivity(activity));
        }
    }
}
 
export default connect(null, mapDispatchToProps)(NapButton);