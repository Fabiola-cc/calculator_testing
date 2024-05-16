import PropTypes from 'prop-types';
import './Buttons.css'
import Operands from './operands'
import Operators from './operators'

const ButtonSection = ({handleNumberClick, handleOperatorClick}) => {
    return (
        <div className="buttons">
        <Operands onClick={handleNumberClick}/>
        <Operators onClick={handleOperatorClick}/>
        </div>
    );
};

ButtonSection.propTypes = {
    handleNumberClick: PropTypes.func.isRequired,
    handleOperatorClick: PropTypes.func.isRequired,
};

export default ButtonSection;