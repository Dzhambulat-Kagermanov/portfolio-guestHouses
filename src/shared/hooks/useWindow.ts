import {
	// 320
	XS_SMALL,
	// 360
	XS_MEDIUM,
	// 420
	XS_BIG,
	// 480
	XS_LARGE,
	// 600
	SM_SMALL,
	// 768
	SM_MEDIUM,
	// 900
	MD_SMALL,
	// 1024
	MD_MEDIUM,
	// 1280
	LG_SMALL,
	// 1440
	LG_MEDIUM,
} from '@/shared/constants'
import { useState, useEffect } from 'react'

interface Return {
	width: number
	isXsSmall: boolean
	isXsMedium: boolean
	isXsBig: boolean
	isXsLarge: boolean
	isSmSmall: boolean
	isSmMedium: boolean
	isMdSmall: boolean
	isMdMedium: boolean
	isLgSmall: boolean
	isLgMedium: boolean
}

export const useWindow = (): Return => {
	const [width, setWidth] = useState(0)

	useEffect(() => {
		setWidth(window.innerWidth)
	}, [])

	useEffect(() => {
		const handleResize = (event: any) => {
			setWidth(event.target.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return {
		width,
		isXsSmall: width >= XS_SMALL,
		isXsMedium: width >= XS_MEDIUM,
		isXsBig: width >= XS_BIG,
		isXsLarge: width >= XS_LARGE,
		isSmSmall: width >= SM_SMALL,
		isSmMedium: width >= SM_MEDIUM,
		isMdSmall: width >= MD_SMALL,
		isMdMedium: width >= MD_MEDIUM,
		isLgSmall: width >= LG_SMALL,
		isLgMedium: width >= LG_MEDIUM,
	}
}
