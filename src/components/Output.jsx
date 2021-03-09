import { connect } from 'react-redux';

const Output = (props) => (
    <div>
        <h3>{props.name} is currently {props.cat}</h3>
    </div>
);

const mapStateToProps = (state) => {
    const { name, activity } = state;
    return {
        name,
        activity,
    };
};

export default connect(mapStateToProps)(Output);