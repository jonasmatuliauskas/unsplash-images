import React from 'react'
import MaterialGridList from '@material-ui/core/GridList';
import MaterialGridListTile from '@material-ui/core/GridList';
import PropTypes from 'prop-types';

const GridList = ({ data, cellHeight, rowCols, imgCols }) => (
    <MaterialGridList cellHeight={cellHeight} cols={rowCols}>
        {data.map((img) => (
        <MaterialGridListTile key={img.img} cols={imgCols}>
            <img src={img.img} alt={img.title} />
        </MaterialGridListTile>
        ))}
    </MaterialGridList>
)

GridList.propTypes = {
    data: PropTypes.array.isRequired,
    cellHeight: PropTypes.number,
    rowCols: PropTypes.number,
    imgCols: PropTypes.number,
};

GridList.defaultProps = {
    cellHeight: 160,
    rowCols: 4,
    imgCols: 2
};

export default GridList;