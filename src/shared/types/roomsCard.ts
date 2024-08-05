export type TService = { title: string; price: number }

export interface IRoomsCardInfoData {
	conditions: { title: string; description: string }[]
	services: TService[]
	title: string
	description: string[]
	previewDescription: string
	roomImages: string[]
}
export interface IRoomsCardData extends IRoomsCardInfoData {
	maxGuests: number
	availableRooms: number
	previewImg: string
}

export interface IRoomsCardAllData extends IRoomsCardData {
	slug: string
}
