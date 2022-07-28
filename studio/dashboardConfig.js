export default {
  widgets: [
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
                  buildHookId: '62e2fc80f7c52f132812bd27',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jftnpsr2',
                  apiId: 'a3ebf9f6-2357-4eff-bb81-46160bd4ee14'
                },
                {
                  buildHookId: '62e2fc8092e0040db5b7af1a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hmuwukfx',
                  apiId: '7f08f315-775e-40bc-8aae-c82c4a4bb2d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adstokoe/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hmuwukfx.netlify.app', category: 'apps'}
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
