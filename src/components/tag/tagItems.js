import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TagItem from './tagItem';

const TagItems = props => {

    const data = useStaticQuery(graphql`
        {
            allWpTag {
                edges {
                    node {
                        name
                        id
                    }
                }
            }
        }
        `
    );

    return (
        <div>
            {data.allWpTag.edges.map(tag => (
                <TagItem
                    name= {tag.node.name}
                    id={tag.node.id}
                    key={tag.node.id}
                    handleChange={props.handleChange}
                    />
            ))}
        </div>
    )
}

export default TagItems;
