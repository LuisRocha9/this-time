import React from 'react';

import Layout from '../components/layout';
import MainMenu from '../components/mainMenu';
import { Link } from 'gatsby';


const Project = ({ pageContext }) => {
    console.log(pageContext);
    return (
        <Layout>
            <MainMenu />
            <article>
                <div className="row">
                    <div className="col-xs-12">
                        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
                    </div>
                </div>
                <div className="row article">
                    <div className="col-xs-12 col-md-8">
                        <div className="article__content" dangerouslySetInnerHTML={{__html: pageContext.content}}/>
                    </div>
                    <div className="col-xs-12 col-md-3 col-md-offset-1">
                        <div className="article__sidebar">
                            <div className="author__image">
                                <Link to={`/project-author/${pageContext.projectInfo.author.slug}`}>
                                    <img src={pageContext.projectInfo.author.authorInfo.photo.sourceUrl} alt={pageContext.projectInfo.author.title}/>
                                </Link>
                            </div>
                            <div className="author__bio">
                                <div dangerouslySetInnerHTML={{__html: pageContext.projectInfo.author.authorInfo.biography}}/>
                            </div>
                            <div className="article__tags">
                                {pageContext.categories.nodes.map(category => (
                                    <a key={category.id} href="#" className="button-tag">{category.name}</a>
                                ))}
                            </div>
                            <div className="article__tags">
                                {pageContext.tags.nodes.map(tag => (
                                    <a key={tag.id} href="#" className="button-tag">{tag.name}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </article>
        </Layout>
    );
};

export default Project;
