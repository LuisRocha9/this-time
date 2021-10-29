import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import SearchInput from './searchInput';
import {
    getAllProjectByCategory,
    getAllProjects,
    getAllProjectByCategoryTag,
    getAllProjectByTag } from '../queries/queries';


    const ProjectsItems = (props) => {

        const [projects, setProject] = useState(props.data.allWpProject);
        const [categories, setCategories] = useState([]);
        const [tags, setTags] = useState([]);


        const handleChangeCategory = (event) => {
            if(event.target.checked) setCategories(oldArray => [...oldArray, event.target.value]);
            else setCategories(categories.filter(item => item !== event.target.value))
        }

        const handleChangeTag = (event) => {
            if(event.target.checked) setTags(oldArray => [...oldArray, event.target.value]);
            else setTags(tags.filter(item => item !== event.target.value))
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            onSearch(categories, tags);
        }



        const onSearch = (categories, tags) => {

            let query = null;

            if(categories.length > 0 && tags.length > 0) query = getAllProjectByCategoryTag;
            else if(categories.length > 0 && tags.length <= 0) query = getAllProjectByCategory;
            else if(categories.length <= 0 && tags.length > 0) query = getAllProjectByTag;
            else query = getAllProjects;


            fetch(`https://wordpress-gatsby-sandbox.previews.mariaadelaide.com/graphql`,
                {
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        query,
                        variables: {
                            categoryId: categories,
                            tagId: tags
                        }
                    })

                })
                .then(response => response.json()) // parse JSON from request
                .then(resultData => {
                    console.log(resultData.data)
                    setProject(resultData.data);

                })

            }

            return (
                <div>
                    <SearchInput handleChangeCategory={handleChangeCategory} handleChangeTag={handleChangeTag} handleSubmit={handleSubmit}/>
                    <div className="row thumbnails">
                        {projects.edges.map(project => (
                            <div key={project.node.id} className="col-xs-6 col-md-4">
                                <Link to={`/project/${project.node.slug}`}>
                                    <div className="thumbnail">
                                        <div className="thumbnail__img">
                                            <img src={project.node.featuredImage.node.sourceUrl} alt="Thumbnail"/>
                                        </div>
                                        <div className="thumbnail__title">

                                            <b>{project.node.title}</b><br />
                                            <div dangerouslySetInnerHTML={{__html : project.node.excerpt}}/>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }



        export default ProjectsItems;

