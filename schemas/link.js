export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'Twitter', value: 'twitter'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'YouTube', value: 'youtube'},
        ]
      },
    },
    {
    name: 'url',
    title: 'URL',
    type: 'url',
    },
  ]
}