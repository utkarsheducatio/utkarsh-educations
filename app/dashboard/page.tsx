'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SimpleDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    heroSlides: 0,
    students: 0,
    testimonials: 0,
  });
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    fetch('/api/users/me', {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          router.push('/login');
          return;
        }
        return res.json();
      })
      .then(() => {
        // Fetch stats
        setLoading(false);
      })
      .catch(() => {
        router.push('/login');
      });
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            🎓 Utkarsh Education - Admin Dashboard
          </h1>
          <button
            onClick={() => {
              fetch('/api/users/logout', { method: 'POST', credentials: 'include' })
                .then(() => router.push('/login'));
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/admin"
              target="_blank"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border-2 border-transparent hover:border-blue-500"
            >
              <div className="text-3xl mb-2">📸</div>
              <h3 className="font-semibold text-gray-900 mb-1">Hero Slides</h3>
              <p className="text-sm text-gray-600">Manage homepage banners</p>
              <p className="text-xs text-red-600 mt-2">⚠️ Payload UI has bugs - use manual upload for now</p>
            </a>

            <a
              href="/admin"
              target="_blank"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border-2 border-transparent hover:border-green-500"
            >
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-semibold text-gray-900 mb-1">Student Results</h3>
              <p className="text-sm text-gray-600">Add topper cards</p>
              <p className="text-xs text-red-600 mt-2">⚠️ Payload UI has bugs - use manual upload for now</p>
            </a>

            <a
              href="/admin"
              target="_blank"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold text-gray-900 mb-1">Testimonials</h3>
              <p className="text-sm text-gray-600">Manage student reviews</p>
              <p className="text-xs text-red-600 mt-2">⚠️ Payload UI has bugs - use manual upload for now</p>
            </a>
          </div>
        </div>

        {/* Workaround Instructions */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Known Issue & Workaround</h3>
          <p className="text-yellow-800 mb-4">
            Payload CMS admin UI currently has compatibility issues with Next.js 15. Here's how to upload images manually:
          </p>
          <div className="space-y-3 text-sm">
            <div className="bg-white p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">Method 1: Direct Upload to /public/media/</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Place your images in: <code className="bg-gray-100 px-2 py-1 rounded">/public/media/</code></li>
                <li>Update component code to reference the image paths</li>
                <li>Restart the dev server to see changes</li>
              </ol>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-semibold text-gray-900 mb-2">Method 2: Use MongoDB Atlas UI</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Go to MongoDB Atlas dashboard</li>
                <li>Browse collections → Insert documents manually</li>
                <li>Upload images to a CDN and reference URLs</li>
              </ol>
            </div>
          </div>
        </div>

        {/* View Website */}
        <div className="mt-8">
          <a
            href="/"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold"
          >
            🌐 View Live Website →
          </a>
        </div>
      </main>
    </div>
  );
}
