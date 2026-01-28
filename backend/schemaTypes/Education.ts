import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'institute',
      title: 'Institute Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Institute Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'qualificationName',
              title: 'Qualification Name',
              type: 'string',
              description: 'e.g., BSc (Hons) in Information Technology',
              validation: (rule) => rule.required(),
            },
            {
              name: 'shortDescription',
              title: 'Short Description',
              type: 'text',
              rows: 2,
              description: 'Optional details (e.g., Major project, Dean’s list)',
            },
            {
              name: 'grade',
              title: 'Grade / GPA',
              type: 'string',
              description: 'e.g., First Class or 3.8/4.0',
            },
            {
              name: 'startDate',
              title: 'Start Date',
              type: 'date',
              options: {dateFormat: 'YYYY-MM'},
              validation: (rule) => rule.required(),
            },
            {
              name: 'endDate',
              title: 'End Date',
              type: 'date',
              options: {dateFormat: 'YYYY-MM'},
              description: 'Leave blank if currently studying',
            },
          ],
          preview: {
            select: {
              title: 'qualificationName',
              subtitle: 'startDate',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'institute',
      media: 'logo',
    },
  },
})
