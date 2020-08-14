import React from 'react'
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles'

const Field = ({ label, onChange }) => {
    const classes = useStyles()
    return <TextField onChange={e => onChange(e)}    className={classes.field} id="outlined-basic" label={label} variant="outlined" />
}

Field.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

Field.defaultProps = {
    label: ''
};

export default Field;