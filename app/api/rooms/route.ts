import { roomsData } from '@/shared/constants/rooms-data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(_request: NextRequest) {
	return NextResponse.json(roomsData)
}
