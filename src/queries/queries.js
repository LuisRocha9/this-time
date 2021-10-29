export const getAllProjectByCategory = `
query MyQuery($categoryName: [String]!) {
    allWpProject(filter: {categories: {nodes: {elemMatch: {name: {in: $categoryName}}}}}) {
        edges {
            node {
                id
                title
                slug
                excerpt
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    }
}`

export const getAllProjectByTag = `
query MyQuery($tagName: [String]!) {
    allWpProject(filter: {tags: {nodes: {elemMatch: {name: {in: $tagName}}}}}) {
        edges {
            node {
                id
                title
                slug
                excerpt
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    }
}`

export const getAllProjectByCategoryTag = `
query MyQuery($categoryName: [String]!, $tagName: [String]!) {
    allWpProject(
    filter: {
        categories: {nodes: {elemMatch: {name: {in: $categoryName}}}},
        tags: {nodes: {elemMatch: {name: {in: $tagName}}}}
    }
  ) {
        edges {
            node {
                id
                title
                slug
                excerpt
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    }
}`

export const getAllProjects = `
{
    allWpProject
     {
        edges {
            node {
                id
                title
                slug
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

`
