import { setActivity } from '../redux/actions';
import { connect } from 'react-redux';

const EatButton = (props) => (
    <>
        <button onClick={() => props.handleClick('eating')}>Eating</button>
    </>
);


const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (activity) => {
            dispatch(setActivity(activity));
        }
    }
}
 
export default connect(null, mapDispatchToProps)(EatButton);