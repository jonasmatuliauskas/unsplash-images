import React from 'react'
import MaterialList from '@material-ui/core/List';
import MaterialListItem from '@material-ui/core/ListItem';
import MaterialListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const List = ({ list, onClick }) => (
    <MaterialList>
        {list.map(l => (
            <MaterialListItem key={l.id}>
                <MaterialListItemText
                    primary={l.title}
                    onClick={() => onClick(l.title)}
                />
            </MaterialListItem>
        ))}
    </MaterialList>
)

List.propTypes = {
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func
};

List.defaultProps = {
    onClick: () => {}
};

export default List;