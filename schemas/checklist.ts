import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'checklist',
  type: 'object',
  title: 'Checklist',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
