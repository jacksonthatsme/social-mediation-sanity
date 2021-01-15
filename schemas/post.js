export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  initialValue: () => ({
    publishDate: new Date().toISOString(),
    authors: [{
      _type: 'reference',
      _ref: '4947db74-b9c0-4a0e-8d3d-5a7bb588388a',
    }],
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
      name: 'publishDate',
      title: 'Published date',
      type: 'date',
      options: {
        dateFormat: 'MMM DD, Y',
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'person'}],
      }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishDate',
    },
  },
}
    