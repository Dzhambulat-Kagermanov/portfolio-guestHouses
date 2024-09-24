import { roomsData } from '@/shared/constants/rooms-data'

export async function GET(
	_request: Request,
	{ params }: { params: { slug: string } }
) {
	const itemIndex = roomsData.findIndex(el => {
		return el.slug.toLowerCase() === params.slug.toLowerCase()
	})
	return Response.json(roomsData[itemIndex])
}
