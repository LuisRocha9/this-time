import React from 'react';
import CategoryItems from './category/categoryItems';
import TagItems from './tag/tagItems';

const SearchInput = props => (

    <form onSubmit={props.handleSubmit.bind(this)}>
        <div style={{display:'flex'}}>
            <CategoryItems handleChange={props.handleChangeCategory} />

            <TagItems handleChange={props.handleChangeTag} />
        </div>
        <input type="submit" value="Submit" />
    </form>


)

export default SearchInput;


/* <label>
Category:
<input type="text" value={props.value} onChange={props.handleChange.bind(this)} />
</label>
<input type="submit" value="Submit" /> */
