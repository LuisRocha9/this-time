import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";

const MainMenu = () => {

    const data = useStaticQuery(graphql
        `
        {
            allWpMenuItem {
                edges {
                    node {
                        id
                        url
                        label
                    }
                }
            }
        }

        `
    )


    return (
        <nav className="menu--sticky">
            <ul>
                {data.allWpMenuItem.edges.map(menuItem => (
                    <li key={menuItem.node.id}>
                        <Link to={menuItem.node.url}>{menuItem.node.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MainMenu;
