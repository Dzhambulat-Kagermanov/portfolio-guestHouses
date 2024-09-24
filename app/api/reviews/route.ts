import { reviewsData } from '@/shared/constants/reviews-data'

export async function GET(_request: Request) {
	return Response.json(reviewsData)
}
