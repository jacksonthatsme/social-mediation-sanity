export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  initialValue: {
    isHost: false,
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'links',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'link'}],
    },
    {
      name: 'isHost',
      title: "Host",
      type: 'boolean',
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
