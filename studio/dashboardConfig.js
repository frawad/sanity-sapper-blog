export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60312715550410b3d81784a7',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-9y3ih5yd',
                  apiId: 'ae6f55c3-4ab5-4c6f-b47b-5389c8085f0d'
                },
                {
                  buildHookId: '6031271598d6e8fc31af0eb4',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-944txxx1',
                  apiId: 'b9b9da10-daa5-45bd-bc4e-1080b17f7238'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frawad/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-944txxx1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
