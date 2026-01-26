import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'devProject',
  title: 'Dev Projects',
  type: 'document',
  fieldsets: [
    {
      name: 'details',
      title: 'Project Details',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'A short, punchy tagline (e.g., "AI-Powered Ticket Management")',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL path for this project',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Project Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Current Status',
      type: 'string',
      options: {
        list: [
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Completed', value: 'completed'},
          {title: 'Archived', value: 'archived'},
        ],
        layout: 'radio',
      },
      initialValue: 'completed',
    }),
    defineField({
      name: 'summary',
      title: 'Executive Summary',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      fieldset: 'details',
    }),
    defineField({
      name: 'role',
      title: 'My Role',
      type: 'string',
      fieldset: 'details',
      placeholder: 'e.g. Lead Full Stack Engineer',
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      fieldset: 'details',
      placeholder: 'e.g. Jan 2024 - Mar 2024',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Site Link',
      type: 'url',
      fieldset: 'details',
    }),
    defineField({
      name: 'repoLinks',
      title: 'Repository Links',
      type: 'array',
      fieldset: 'details',
      of: [
        {
          type: 'object',
          title: 'Link',
          fields: [
            {name: 'label', title: 'Label (e.g. GitHub)', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    }),

    defineField({
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'caption', type: 'string', title: 'Caption'}],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
})
