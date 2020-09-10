export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f59d1573b06ffba6b962be9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-by8ucruj',
                  apiId: '0ab60dc1-9764-4369-9acc-c7f82b875d41'
                },
                {
                  buildHookId: '5f59d1576c528494ed44ee85',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jgxvf2e1',
                  apiId: '84c40f46-8a4f-4485-9a48-d22f0438fa6e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tridungbk2010/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jgxvf2e1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
