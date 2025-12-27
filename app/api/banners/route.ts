import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@payload-config';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const payload = await getPayload({ config });

    const banners = await payload.find({
      collection: 'banners',
      where: {
        active: {
          equals: true,
        },
      },
      sort: 'order',
      limit: 10,
    });

    // Transform the data to include full image URLs
    const transformedBanners = banners.docs.map((banner: any) => ({
      id: banner.id,
      title: banner.title,
      altText: banner.altText,
      link: banner.link,
      order: banner.order,
      image: banner.image
        ? {
            url: typeof banner.image === 'object' ? banner.image.url : null,
            alt: banner.altText || banner.title,
          }
        : null,
    }));

    return NextResponse.json({
      success: true,
      banners: transformedBanners,
      count: transformedBanners.length,
    });
  } catch (error) {
    console.error('Error fetching banners:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch banners',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
