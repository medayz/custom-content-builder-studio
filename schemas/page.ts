export default {
  name: 'page',
  type: 'document',
  title: 'Page',
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
    },
    {
      name: 'content_modules',
      title: 'Content Modules',
      type: 'array',
      of: [{type: 'imageObject'}, {type: 'cardGroup'}, {type: 'checklist'}],
    },
  ],
}
