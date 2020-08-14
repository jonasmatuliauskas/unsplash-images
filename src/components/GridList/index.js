import React from 'react'
import { GridList as MaterialGridList, GridListTile as MaterialGridListTile } from '@material-ui/core/';
import PropTypes from 'prop-types';

const GridList = ({ data, cellHeight, rowCols, imgCols }) => (
    <MaterialGridList cellHeight={cellHeight} cols={rowCols}>
    {data.map((tile) => (
      <MaterialGridListTile key={tile.id} cols={imgCols}>
        <img src={tile.src} alt={tile.title} />
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