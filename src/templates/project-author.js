import React from 'react';

import Layout from '../components/layout';
import MainMenu from '../components/mainMenu';
import ProjectItems from '../components/projectItems';


import { graphql } from 'gatsby';


export const query = graphql`

query getProjects($title: String!) {
    allWpProject(filter: {author: {eq: $title}}) {
        edges {
            node {
                id
                title
                excerpt
                slug
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


const Author = ({data, pageContext}) => {
    console.log(pageContext)
    return (
        <Layout>
            <MainMenu />
                <div className="row">
                    <div className="col-xs-12">
                        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
                    </div>
                </div>


            <div className="row">
                <div className="col-xs-12 col-md-8">
                    <ProjectItems data={data}/>
                </div>
                <div className="col-xs-12 col-md-3 col-md-offset-1">
                    <div className="article__sidebar">
                        <div className="author__image">

                            <img src={pageContext.authorInfo.photo.sourceUrl} alt={pageContext.title}/>

                        </div>
                        <div className="author__bio">
                            <div dangerouslySetInnerHTML={{__html: pageContext.authorInfo.biography}}/>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
};


export default Author;
