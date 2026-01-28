import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      description: 'Your main H1 title (e.g. "Engineering Efficient Scalable Solutions")',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      description: 'The text under the headline on the homepage',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200).warning('The short bio should be less than 200 characters'),
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      placeholder: 'Colombo, Sri Lanka',
    }),
    defineField({
      name: 'resume',
      title: 'Resume PDF',
      type: 'file',
      description: 'Upload your latest CV here',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform Name', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { 
               name: 'icon', 
               title: 'Icon Name', 
               type: 'string', 
               description: 'e.g., ph:github-logo-bold' 
            }
          ]
        }
      ]
    }),
  ],
})