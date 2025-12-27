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
    meta: {
      titleSuffix: '| Utkarsh Education Admin',
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'select',
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'Editor', value: 'editor' },
          ],
          defaultValue: 'editor',
        },
      ],
    },
    // ===============================
    // HERO BANNERS - Home Page Slider
    // ===============================
    {
      slug: 'banners',
      labels: {
        singular: 'Banner',
        plural: 'Banners',
      },
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'order', 'active', 'updatedAt'],
        description: 'Manage hero banners displayed on the home page slider',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Banner Title',
          admin: {
            description: 'Internal title for identification',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Banner Image',
          admin: {
            description: 'Recommended size: 1920x700 pixels (JPG/PNG)',
          },
        },
        {
          name: 'altText',
          type: 'text',
          required: true,
          label: 'Alt Text',
          admin: {
            description: 'Describe the image for SEO and accessibility',
          },
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link URL (optional)',
          admin: {
            description: 'Where should the banner link to? (e.g., /courses/neet-11)',
          },
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 0,
          label: 'Display Order',
          admin: {
            description: 'Lower numbers appear first',
          },
        },
        {
          name: 'active',
          type: 'checkbox',
          defaultValue: true,
          label: 'Active',
          admin: {
            description: 'Uncheck to hide this banner',
          },
        },
      ],
    },
    // ===============================
    // STUDENT RESULTS - Results Page
    // ===============================
    {
      slug: 'student-results',
      labels: {
        singular: 'Student Result',
        plural: 'Student Results',
      },
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'exam', 'rank', 'year', 'college', 'active'],
        description: 'Manage student success stories and exam results',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              label: 'Student Name',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'year',
              type: 'number',
              required: true,
              defaultValue: 2024,
              label: 'Exam Year',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Student Photo',
          admin: {
            description: 'Upload student passport photo (square, min 300x300px)',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'exam',
              type: 'select',
              required: true,
              label: 'Exam',
              options: [
                { label: 'NEET', value: 'NEET' },
                { label: 'JEE Main', value: 'JEE Main' },
                { label: 'JEE Advanced', value: 'JEE Advanced' },
                { label: 'MHT-CET', value: 'MHT-CET' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'rank',
              type: 'text',
              required: true,
              label: 'Rank',
              admin: {
                width: '50%',
                placeholder: 'e.g., AIR 245 or State Rank 12',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'marks',
              type: 'text',
              required: true,
              label: 'Marks/Score',
              admin: {
                width: '50%',
                placeholder: 'e.g., 715/720 or 99.8 percentile',
              },
            },
            {
              name: 'percentile',
              type: 'text',
              label: 'Percentile (optional)',
              admin: {
                width: '50%',
                placeholder: 'e.g., 99.98%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'college',
              type: 'text',
              required: true,
              label: 'College/Institute',
              admin: {
                width: '50%',
                placeholder: 'e.g., AIIMS Delhi or IIT Bombay',
              },
            },
            {
              name: 'course',
              type: 'text',
              required: true,
              label: 'Course/Branch',
              admin: {
                width: '50%',
                placeholder: 'e.g., MBBS or Computer Science',
              },
            },
          ],
        },
        {
          name: 'testimonial',
          type: 'textarea',
          label: 'Student Testimonial (optional)',
          admin: {
            description: 'A short quote from the student about their experience',
          },
        },
        {
          name: 'cardColor',
          type: 'select',
          required: true,
          defaultValue: 'from-blue-500 to-cyan-500',
          label: 'Card Color Theme',
          options: [
            { label: '🔵 Blue-Cyan', value: 'from-blue-500 to-cyan-500' },
            { label: '💜 Purple-Indigo', value: 'from-purple-500 to-indigo-500' },
            { label: '💗 Pink-Rose', value: 'from-pink-500 to-rose-500' },
            { label: '💚 Green-Emerald', value: 'from-green-500 to-emerald-500' },
            { label: '🧡 Orange-Red', value: 'from-orange-500 to-red-500' },
            { label: '💛 Yellow-Orange', value: 'from-yellow-500 to-orange-500' },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'order',
              type: 'number',
              required: true,
              defaultValue: 0,
              label: 'Display Order',
              admin: {
                width: '50%',
                description: 'Lower numbers appear first',
              },
            },
            {
              name: 'featured',
              type: 'checkbox',
              defaultValue: false,
              label: 'Featured Result',
              admin: {
                width: '25%',
                description: 'Show prominently',
              },
            },
            {
              name: 'active',
              type: 'checkbox',
              defaultValue: true,
              label: 'Active',
              admin: {
                width: '25%',
                description: 'Show on website',
              },
            },
          ],
        },
      ],
    },
    // ===============================
    // MEDIA - File Uploads
    // ===============================
    {
      slug: 'media',
      labels: {
        singular: 'Media',
        plural: 'Media Library',
      },
      admin: {
        description: 'Upload and manage images for banners and student photos',
      },
      access: {
        read: () => true,
      },
      upload: {
        staticDir: path.resolve(dirname, './public/media'),
        mimeTypes: ['image/*'],
        imageSizes: [
          {
            name: 'thumbnail',
            width: 150,
            height: 150,
            position: 'centre',
          },
          {
            name: 'card',
            width: 400,
            height: 400,
            position: 'centre',
          },
          {
            name: 'banner',
            width: 1920,
            height: 700,
            position: 'centre',
          },
        ],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
          admin: {
            description: 'Describe the image for SEO and accessibility',
          },
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
