import { articlesData } from '@/shared/constants/articles-data'

export async function GET(_request: Request) {
	return Response.json(articlesData)
}
