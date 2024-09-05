import {
	XS_SMALL,
	XS_MEDIUM,
	XS_BIG,
	XS_LARGE,
	SM_SMALL,
	SM_MEDIUM,
	MD_SMALL,
	MD_MEDIUM,
	LG_SMALL,
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
	isOverflowBig: boolean
}

export const useWindow = (): Return => {
	const [width, setWidth] = useState(window.innerWidth)

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
		isXsSmall: width <= XS_SMALL,
		isXsMedium: width <= XS_MEDIUM,
		isXsBig: width <= XS_BIG,
		isXsLarge: width <= XS_LARGE,
		isSmSmall: width <= SM_SMALL,
		isSmMedium: width <= SM_MEDIUM,
		isMdSmall: width <= MD_SMALL,
		isMdMedium: width <= MD_MEDIUM,
		isLgSmall: width <= LG_SMALL,
		isLgMedium: width <= LG_MEDIUM,
		isOverflowBig: width > LG_MEDIUM,
	}
}
