import React from 'react';

import Layout from '../components/layout';
import ProjectItems from '../components/projectItems';
import MainMenu from '../components/mainMenu';
import { graphql } from 'gatsby';

export const query = graphql`

{
    allWpProject {
        edges {
            node {
                id
                title
                slug
                content
                excerpt
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    }
}

`;


const Page = ({ pageContext, data }) => {
    return (
        <Layout>
            <div className="row">
                <div className="col-xs-12">
                    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
                </div>
            </div>
            <MainMenu />
            <ProjectItems data={data}/>
        </Layout>
    );
};

export default Page;
