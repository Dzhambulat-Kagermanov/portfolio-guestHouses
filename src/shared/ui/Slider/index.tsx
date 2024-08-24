'use client'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { FC, ReactNode, useEffect, useRef } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import cls from './index.module.scss'

interface Props extends IClassName, SwiperOptions {
	items: ReactNode[]
	slideItem?: string
	wrapperClass?: string
	slideClass?: string
	sliderChildren?: ReactNode
	wrapperChildren?: ReactNode
	getActiveIndex?: (index: number) => void
}
const Slider: FC<Props> = ({
	items,
	wrapperClass,
	className,
	slideClass,
	sliderChildren,
	wrapperChildren,
	getActiveIndex,
	...other
}) => {
	const sliderActiveIndexRef = useRef<number>()

	useEffect(() => {
		getActiveIndex &&
			getActiveIndex(
				sliderActiveIndexRef.current || sliderActiveIndexRef.current === 0
					? sliderActiveIndexRef.current
					: -1
			)
	}, [getActiveIndex ? sliderActiveIndexRef : undefined])

	return (
		<div className={cn(cls.wrapper, [wrapperClass])}>
			<Swiper
				className={cn(cls.slider, [className])}
				{...other}
				onSwiper={swiper => {
					if (getActiveIndex) sliderActiveIndexRef.current = swiper.activeIndex
				}}
			>
				{items.map((el, index) => (
					<SwiperSlide key={index} className={cn(cls.slide, [slideClass])}>
						{el}
					</SwiperSlide>
				))}
				{sliderChildren}
			</Swiper>
			{wrapperChildren}
		</div>
	)
}

export { Slider }
