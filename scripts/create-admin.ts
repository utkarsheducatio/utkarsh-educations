import { config as dotenvConfig } from 'dotenv'
import { getPayload } from 'payload'
import config from '../payload.config'

// Load environment variables
dotenvConfig()

async function createFirstUser() {
  try {
    console.log('Connecting to MongoDB...')
    console.log('DATABASE_URI:', process.env.DATABASE_URI)
    const payload = await getPayload({ config })
    
    const user = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@utkarsheducation.com',
        password: 'Admin@123',
        name: 'Admin User',
      },
    })

    console.log('✅ Admin user created successfully!')
    console.log('Email:', user.email)
    console.log('Password: Admin@123')
    console.log('\nYou can now login at: http://localhost:3002/admin/login')
    
    process.exit(0)
  } catch (error) {
    console.error('Error creating user:', error)
    process.exit(1)
  }
}

createFirstUser()
