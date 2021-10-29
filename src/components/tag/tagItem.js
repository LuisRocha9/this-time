import React from 'react';

const TagItem = props => {

    return(
    <div>
        <input type="checkbox" id={props.id} name={props.name} value={props.name} onChange={props.handleChange.bind(this)}/>
        <label htmlFor={props.name}>{props.name}</label>
    </div>
)};

export default TagItem;
