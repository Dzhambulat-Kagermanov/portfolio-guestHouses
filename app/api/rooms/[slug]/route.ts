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

export async function PATCH(
	request: Request,
	{ params }: { params: { slug: string } }
) {
	const body = await request.json()
	console.log(body)

	const { type } = body

	const roomsIndex = roomsData.findIndex(({ slug }) => slug === params.slug)

	if (roomsIndex > -1) {
		if (type === 'availableRooms')
			roomsData[roomsIndex].availableRooms = body.availableRooms
	}
	return Response.json(roomsData[roomsIndex])
}
