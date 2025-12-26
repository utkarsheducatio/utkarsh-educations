# Payload CMS Setup Guide for Utkarsh Education

## 🚀 Getting Started with Payload CMS

### Step 1: Start MongoDB
You need MongoDB running locally or use MongoDB Atlas (cloud).

**Option A - Local MongoDB:**
```bash
# Install MongoDB (macOS)
brew install mongodb-community

# Start MongoDB service
brew services start mongodb-community

# Or start manually
mongod --dbpath=/path/to/data/db
```

**Option B - MongoDB Atlas (Cloud):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account and cluster
3. Get connection string like: `mongodb+srv://username:password@cluster.mongodb.net/utkarsh`
4. Update `.env` file with your connection string

### Step 2: Update Environment Variables
Edit your `.env` file:
```env
DATABASE_URI=mongodb://localhost:27017/utkarsh-education
# Or for MongoDB Atlas:
# DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/utkarsh

PAYLOAD_SECRET=your-super-secret-key-change-this
```

### Step 3: Create Your First Admin User
Run the development server and visit the admin panel:

```bash
npm run dev
```

Then go to: **http://localhost:3000/admin**

You'll see a signup form to create your first admin user.

---

## 📋 CMS Collections Overview

### 1. **Hero Slides** 
Upload and manage homepage hero section images
- **Fields:** Title, Subtitle, Image, Order, Active
- **Usage:** Controls the rotating banner on homepage

### 2. **Student Results**
Manage student topper cards with photos
- **Fields:**
  - Student Name
  - Student Photo (upload)
  - Exam (NEET/JEE/MHT-CET)
  - Year
  - Rank (e.g., "AIR 245")
  - Score (e.g., "715/720")
  - College Admitted
  - Course/Stream
  - Card Color Theme
  - Display Order
  - Active (show/hide)

### 3. **Testimonials**
Student reviews and feedback
- **Fields:** Student Name, Course, Message, Rating (1-5), Order, Active

### 4. **Media Library**
Central storage for all images
- Auto-saves to: `/public/media/`
- All uploaded images available across all collections

---

## 🖼️ How to Upload Images

### Upload Student Result Images:
1. Go to **http://localhost:3000/admin**
2. Login with your admin account
3. Click **"Student Results"** in sidebar
4. Click **"Create New"** button
5. Fill in student details:
   - Name: "Priya Sharma"
   - Click "Student Photo" → Upload image
   - Select Exam: "NEET"
   - Year: 2024
   - Rank: "AIR 245"
   - Score: "715/720"
   - College: "AIIMS Delhi"
   - Stream: "MBBS"
   - Choose color theme
   - Set order (1, 2, 3...)
   - Check "Active" to show on website
6. Click **"Save"**

### Upload Hero Banner Images:
1. Go to **"Hero Slides"** collection
2. Click **"Create New"**
3. Add title and subtitle
4. Upload hero image (recommended: 1920x800px)
5. Set order (1, 2, 3 for slide sequence)
6. Check "Active"
7. Save

---

## 🔧 Connecting CMS Data to Frontend

### Update Results Component to Use Payload Data:

Create API route to fetch data:
```typescript
// app/api/results/route.ts
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {
  const payload = await getPayload({ config })
  
  const results = await payload.find({
    collection: 'student-results',
    where: {
      active: {
        equals: true,
      },
    },
    sort: 'order',
  })
  
  return Response.json(results.docs)
}
```

Then fetch in your component:
```typescript
// components/Results.tsx
const [toppers, setToppers] = useState([])

useEffect(() => {
  fetch('/api/results')
    .then(res => res.json())
    .then(data => setToppers(data))
}, [])
```

---

## 📸 Image Requirements

### Hero Banners:
- **Dimensions:** 1920x800px (or 16:9 ratio)
- **Format:** JPG or PNG
- **Size:** Under 500KB (optimized)

### Student Photos:
- **Dimensions:** 400x400px (square)
- **Format:** JPG or PNG
- **Size:** Under 200KB
- **Background:** Professional/solid color preferred

---

## 🎯 Quick Workflow

### Daily Use:
1. **Add new topper:**
   - Admin → Student Results → Create New
   - Upload photo and fill details
   - Save

2. **Update hero banner:**
   - Admin → Hero Slides → Edit existing
   - Or create new slide

3. **Manage testimonials:**
   - Admin → Testimonials → Create/Edit

### All changes reflect immediately on website! 🎉

---

## 🔒 Admin Access Control

Default admin URL: **http://localhost:3000/admin**

- First user = Super Admin (full access)
- Can create additional admin users
- Login required for all CMS operations
- Public API endpoints are read-only

---

## 📱 Next Steps

1. ✅ Start MongoDB
2. ✅ Create admin user at `/admin`
3. ✅ Upload your first hero image
4. ✅ Add student result cards
5. ✅ Test website to see changes
6. 🚀 Deploy to production (Vercel + MongoDB Atlas)

---

## ❓ Troubleshooting

**Can't access /admin:**
- Ensure dev server is running (`npm run dev`)
- Check MongoDB is running
- Clear browser cache

**Images not showing:**
- Check image uploaded successfully in Media library
- Verify image path in `/public/media/`
- Check browser console for errors

**Database connection errors:**
- Verify MongoDB is running
- Check DATABASE_URI in `.env`
- Test connection string

---

Need help? Check the logs in your terminal or browser console! 🛠️
