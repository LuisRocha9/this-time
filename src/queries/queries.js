export const getAllProjectByCategory = `
query MyQuery($categoryId: [ID]!) {
  projects(where: {categoryIn: $categoryId}) {
    edges {
      node {
        id
        slug
        title
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
query MyQuery($tagIn: [ID]!) {
  projects(where: {tagIn: $tagId}) {
    edges {
      node {
        id
        slug
        title
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
query MyQuery($tagIn: [ID]!, $categoryId: [ID]!) {
  projects(where: {categoryIn: $categoryId, tagIn: $tagId}) {
    edges {
      node {
        id
        slug
        title
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

export const getAllProjects = `
{
  projects{
    edges {
      node {
        id
        slug
        title
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
