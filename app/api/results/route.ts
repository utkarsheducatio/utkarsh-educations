import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@payload-config';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const exam = searchParams.get('exam'); // Filter by exam type
    const featured = searchParams.get('featured'); // Get only featured results
    const limit = parseInt(searchParams.get('limit') || '20');

    const payload = await getPayload({ config });

    // Build the where clause
    const whereClause: any = {
      active: {
        equals: true,
      },
    };

    if (exam) {
      whereClause.exam = {
        equals: exam,
      };
    }

    if (featured === 'true') {
      whereClause.featured = {
        equals: true,
      };
    }

    const results = await payload.find({
      collection: 'student-results',
      where: whereClause,
      sort: 'order',
      limit,
    });

    // Transform the data to include full image URLs
    const transformedResults = results.docs.map((result: any) => ({
      id: result.id,
      name: result.name,
      year: result.year,
      exam: result.exam,
      rank: result.rank,
      marks: result.marks,
      percentile: result.percentile,
      college: result.college,
      course: result.course,
      testimonial: result.testimonial,
      cardColor: result.cardColor,
      featured: result.featured,
      photo: result.photo
        ? {
            url: typeof result.photo === 'object' ? result.photo.url : null,
            thumbnail:
              typeof result.photo === 'object' && result.photo.sizes?.thumbnail
                ? result.photo.sizes.thumbnail.url
                : null,
            card:
              typeof result.photo === 'object' && result.photo.sizes?.card
                ? result.photo.sizes.card.url
                : null,
          }
        : null,
    }));

    return NextResponse.json({
      success: true,
      results: transformedResults,
      count: transformedResults.length,
      totalDocs: results.totalDocs,
    });
  } catch (error) {
    console.error('Error fetching student results:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch student results',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
