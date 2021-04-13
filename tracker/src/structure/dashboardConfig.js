export default {
widgets: [
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
                  buildHookId: '6073b27507b36acbef9da810',
                  title: 'Gatsby Website rebuild',
                  name: 'hey-sugar-fks',
                  apiId: '963118ff-2854-498f-86a4-ae9f83522211'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sachinsancheti1/hey-sugar-fks',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hey-sugar-fks.netlify.app', category: 'apps' }
        ]
      }
    }
]
}