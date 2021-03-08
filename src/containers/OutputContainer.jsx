import Output from '../components/Output';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // Translate Redux State to React Props
    return {
        cat: state.activity
    }
}

export default connect(mapStateToProps)(Output);