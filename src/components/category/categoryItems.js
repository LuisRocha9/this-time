import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import CategoryItem from './categoryItem';

const CategoryItems = props => {

    const data = useStaticQuery(graphql`
        {
            allWpCategory {
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
            {data.allWpCategory.edges.map(category => (
                <CategoryItem
                    name= {category.node.name}
                    id={category.node.id}
                    key={category.node.id}
                    handleChange={props.handleChange}
                    />
            ))}
        </div>
    )
}

export default CategoryItems;
