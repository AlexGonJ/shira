import { businessRating } from '@/lib/business-rating';

type GooglePlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
};

export async function GET(request: Request) {
  if (request.method !== 'GET') return new Response(null, { status: 405 });
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return Response.json({ ...businessRating, live: false }, { headers: { 'Cache-Control': 'no-store' } });
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return Response.json({ ...businessRating, live: false }, { headers: { 'Cache-Control': 'no-store' } });
    }

    const place = await response.json() as GooglePlaceDetails;
    return Response.json({
      rating: place.rating ?? businessRating.rating,
      count: place.userRatingCount ?? businessRating.count,
      sourceUrl: place.googleMapsUri ?? businessRating.sourceUrl,
      live: typeof place.rating === 'number' && typeof place.userRatingCount === 'number',
    }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return Response.json({ ...businessRating, live: false }, { headers: { 'Cache-Control': 'no-store' } });
  }
}
