'use client'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { FC, ReactNode } from 'react'
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
}
const Slider: FC<Props> = ({
	items,
	wrapperClass,
	className,
	slideClass,
	sliderChildren,
	wrapperChildren,
	...other
}) => {
	return (
		<div className={cn(cls.wrapper, [wrapperClass])}>
			<Swiper className={cn(cls.slider, [className])} {...other}>
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
