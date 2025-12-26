import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      slug: 'hero-slides',
      labels: {
        singular: 'Hero Slide',
        plural: 'Hero Slides',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
        {
          name: 'active',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      slug: 'student-results',
      labels: {
        singular: 'Student Result',
        plural: 'Student Results',
      },
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'exam', 'rank', 'active'],
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Student Name',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Student Photo',
        },
        {
          name: 'exam',
          type: 'select',
          required: true,
          options: [
            { label: 'NEET', value: 'NEET' },
            { label: 'JEE Main', value: 'JEE Main' },
            { label: 'JEE Advanced', value: 'JEE Advanced' },
            { label: 'MHT-CET', value: 'MHT-CET' },
          ],
        },
        {
          name: 'year',
          type: 'number',
          required: true,
          defaultValue: 2024,
          label: 'Exam Year',
        },
        {
          name: 'rank',
          type: 'text',
          required: true,
          label: 'Rank (e.g., AIR 245)',
        },
        {
          name: 'score',
          type: 'text',
          required: true,
          label: 'Score (e.g., 715/720)',
        },
        {
          name: 'college',
          type: 'text',
          required: true,
          label: 'College Admitted',
        },
        {
          name: 'stream',
          type: 'text',
          required: true,
          label: 'Course/Stream',
        },
        {
          name: 'gradientColor',
          type: 'select',
          required: true,
          defaultValue: 'blue',
          label: 'Card Color Theme',
          options: [
            { label: 'Pink-Rose', value: 'from-pink-500 to-rose-500' },
            { label: 'Blue-Cyan', value: 'from-blue-500 to-cyan-500' },
            { label: 'Purple-Indigo', value: 'from-purple-500 to-indigo-500' },
            { label: 'Green-Emerald', value: 'from-green-500 to-emerald-500' },
            { label: 'Yellow-Orange', value: 'from-yellow-500 to-orange-500' },
            { label: 'Red-Pink', value: 'from-red-500 to-pink-500' },
          ],
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 0,
          label: 'Display Order',
        },
        {
          name: 'active',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show on Website',
        },
      ],
    },
    {
      slug: 'testimonials',
      labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
      },
      admin: {
        useAsTitle: 'studentName',
        defaultColumns: ['studentName', 'course', 'active'],
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'studentName',
          type: 'text',
          required: true,
          label: 'Student Name',
        },
        {
          name: 'course',
          type: 'text',
          required: true,
          label: 'Course (e.g., NEET 2024)',
        },
        {
          name: 'message',
          type: 'textarea',
          required: true,
          label: 'Testimonial Message',
        },
        {
          name: 'rating',
          type: 'number',
          required: true,
          defaultValue: 5,
          min: 1,
          max: 5,
          label: 'Rating (1-5)',
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 0,
          label: 'Display Order',
        },
        {
          name: 'active',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show on Website',
        },
      ],
    },
    {
      slug: 'media',
      upload: {
        staticDir: path.resolve(dirname, './public/media'),
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/utkarsh-education',
  }),
})
