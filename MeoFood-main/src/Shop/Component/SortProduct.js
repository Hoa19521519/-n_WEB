import React from 'react';
import PropTypes from 'prop-types';

SortProduct.propTypes = {
    handlerChangeSort: PropTypes.func
};

SortProduct.defaultProps = {
    handlerChangeSort: null
}

function SortProduct(props) {

    const { handlerChangeSort } = props

    const onChangeValue = (e) => {
        
        const keyword = e.target.value

        if (!handlerChangeSort){
            return
        }

        handlerChangeSort(keyword)

    }

    return (
        <select className="selectpicker ml-auto" onChange={onChangeValue}>
            <option value="default">Default</option>
            <option value="UpToDown">Descending</option>
            <option value="DownToUp">Ascending</option>            
        </select>
    );
}

export default SortProduct;