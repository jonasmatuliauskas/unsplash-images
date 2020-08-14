import React from 'react'
import PropTypes from 'prop-types';
import MaterialButton from '@material-ui/core/Button';
import useStyles from './styles'

const Button = ({ type, title, onClick }) => {
    const classes = useStyles()
    const types = {
        primary: {
            variant: 'contained',
            color: 'primary'
        },
        secondary: {
            variant: 'outlined',
            color: 'secondary'
        }
    }
    const { variant, color } = types[type]
    return <MaterialButton onClick={onClick} className={classes.button} variant={variant} color={color}>{title}</MaterialButton>
}

Button.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    type: 'secondary'
};

export default Button;