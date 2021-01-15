export default {
  name: 'episode',
  title: 'Episode',
  type: 'document',
  initialValue: () => ({
    publishDate: new Date().toISOString()
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'media',
      title: 'Media',
      type: 'url',
    },
    {
      name: 'publishDate',
      title: 'Published date',
      type: 'date',
      options: {
        dateFormat: 'MMM DD, Y',
      }
    },
    {
      name: 'panelists',
      title: 'Panelists',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'person'}],
      }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishDate',
    },
  },
}
  