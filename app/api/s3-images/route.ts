import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextResponse } from 'next/server';

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function GET() {
  try {
    // Define the image keys directly
    const imageKeys = [
      'utkarsh_data/web-1-n.png',
      'utkarsh_data/web-2-n.png',
      'utkarsh_data/web-3-n.png',
    ];

    // Generate signed URLs for each image
    const images = await Promise.all(
      imageKeys.map(async (key) => {
        const command = new GetObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME!,
          Key: key,
        });

        // Generate signed URL that expires in 1 hour
        const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

        return {
          key,
          url,
        };
      })
    );

    return NextResponse.json({ images, count: images.length });
  } catch (error) {
    console.error('Error generating signed URLs:', error);
    return NextResponse.json(
      { error: 'Failed to generate signed URLs for S3 images' },
      { status: 500 }
    );
  }
}
