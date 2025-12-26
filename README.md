# Utkarsh Education Website

A modern, high-speed coaching institute website built with Next.js 14, TypeScript, Tailwind CSS, and Payload CMS.

## 🚀 Features

- **Modern Design**: Clean, educational-focused design with smooth animations
- **Hero Slider**: Dynamic image carousel managed through Payload CMS
- **Course Offerings**: NEET, JEE, MHT-CET preparation courses
- **Mobile Responsive**: Fully responsive design for all devices
- **Fast Performance**: Built with Next.js 14 for optimal speed
- **CMS Integration**: Easy content management with Payload CMS

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud instance)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd /Users/mpiyush/Downloads/utkarsh_education
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update the MongoDB connection string if needed

4. **Start MongoDB**
   Make sure MongoDB is running on your system:
   ```bash
   # macOS with Homebrew
   brew services start mongodb-community
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Payload Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📁 Project Structure

```
utkarsh_education/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── HeroSlider.tsx    # Hero carousel
│   ├── QuickAdmission.tsx # Course cards
│   ├── Features.tsx       # Features section
│   ├── Courses.tsx        # Courses section
│   ├── WhyUs.tsx          # Why choose us
│   ├── Announcements.tsx  # Announcements
│   └── Contact.tsx        # Contact/Footer
├── payload.config.ts      # Payload CMS configuration
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Customization

### Adding Hero Slider Images

1. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Create an admin account (first time)
3. Go to "Hero Slides" collection
4. Add new slides with images, titles, and subtitles
5. Set the order for slide sequence

### Color Scheme

Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: { ... },  // Blue shades
  accent: { ... },   // Orange shades
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Environment Variables for Production

- `PAYLOAD_SECRET`: Strong secret key
- `DATABASE_URI`: MongoDB connection string
- `NEXT_PUBLIC_SERVER_URL`: Your production URL

## 📝 Content from Original Site

The content, structure, and sections are based on the original WordPress site at [utkarsheducationakola.com](https://utkarsheducationakola.com/), redesigned with modern UI/UX principles.

## 🛡️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Payload CMS
- **Database**: MongoDB
- **Deployment**: Vercel-ready

## 📞 Support

For issues or questions, contact: 9370811902

## 📄 License

© 2025 Utkarsh Education. All rights reserved.

---

**Note**: Image placeholders are included in the design. Replace them with actual images through the Payload CMS admin panel or by updating the components directly.
