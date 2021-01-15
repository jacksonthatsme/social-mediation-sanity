export default {
    name: 'pressMention',
    title: 'Press Mention',
    type: 'document',
    fields: [
      {
        name: 'headline',
        title: 'Headline',
        type: 'string',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'url',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
      },
    ],
    preview: {
      select: {
        title: 'headline',
        author: 'author',
      },
    },
  }
     