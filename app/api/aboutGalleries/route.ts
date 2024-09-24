import { aboutGalleryData } from '@/shared/constants/aboutGallery-data'

export async function GET(_request: Request) {
	return Response.json(aboutGalleryData)
}
