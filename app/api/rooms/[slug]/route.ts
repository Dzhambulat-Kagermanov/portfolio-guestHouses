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
	const { newAvailableRooms } = body

	const patchedItemIndex = roomsData.findIndex(el => {
		return el.slug.toLowerCase() === params.slug.toLowerCase()
	})
	roomsData[patchedItemIndex].availableRooms = newAvailableRooms
	return Response.json(roomsData[patchedItemIndex])
}
