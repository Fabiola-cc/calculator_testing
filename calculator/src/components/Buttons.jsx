import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';
import Operands from './operands';
import Operators from './operators';

const ButtonSection = ({ handleNumberClick, handleOperatorClick }) => {
    const [activeKey, setActiveKey] = useState(null);

    // Manejar eventos de teclado
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event;
            if (!isNaN(key) || key === '.') {
                // Si la tecla presionada es un número o un punto decimal, llamar a handleNumberClick
                handleNumberClick(key);
            } else if (['+', '-', '*', '/'].includes(key)) {
                // Si la tecla presionada es un operador, llamar a handleOperatorClick
                handleOperatorClick(key);
            } else if (key === 'Enter') {
                // Si la tecla presionada es Enter, simular un clic en el operador "="
                handleOperatorClick('=');
            }

            // Establecer la tecla activa para resaltar el botón correspondiente
            setActiveKey(key);
        };

        const handleKeyUp = () => {
            // Limpiar la tecla activa cuando se levanta la tecla
            setActiveKey(null);
        };

        // Agregar el evento de escucha para los eventos de teclado
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        // Eliminar el evento de escucha al desmontar el componente
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleNumberClick, handleOperatorClick]);

    return (
        <div className="buttons">
            <Operands onClick={handleNumberClick} activeKey={activeKey} />
            <Operators onClick={handleOperatorClick} activeKey={activeKey} />
        </div>
    );
};

ButtonSection.propTypes = {
    handleNumberClick: PropTypes.func.isRequired,
    handleOperatorClick: PropTypes.func.isRequired,
};

export default ButtonSection;
