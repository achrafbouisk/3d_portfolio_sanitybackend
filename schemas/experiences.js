export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [
        {
          name: 'work',
          title: 'Work',
          type: 'workExperience',
        },
      ],
    },
  ],
}
