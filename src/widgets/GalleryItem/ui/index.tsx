'use client'
import { Arrow } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Container, Slider, Typography } from '@/shared/ui'
import Image from 'next/image'
import { FC } from 'react'
import { Navigation } from 'swiper/modules'
import cls from './index.module.scss'

interface Props extends IClassName {
	title: string
	photos: string[]
	sliderClasses?: {
		slider?: string
		slide?: string
		wrapper?: string
	}
	titleClass?: string
}
const GalleryItem: FC<Props> = ({
	photos,
	title,
	className,
	titleClass,
	sliderClasses,
}) => {
	return (
		<Container
			innerClass={cn(cls.gallery, [className])}
			containerClass={cn(cls.container)}
		>
			<Typography tag='h2' className={cn(cls.title, [titleClass])} weight='SB'>
				{title}
			</Typography>
			<Slider
				items={photos.map((el, index) => (
					<Image
						width={180}
						height={180}
						alt={`${title}-${index}`}
						src={el}
						key={index}
					/>
				))}
				loop={photos.length > 4}
				centeredSlides={photos.length > 4}
				slidesPerView={'auto'}
				spaceBetween={15}
				navigation={{
					nextEl: `.${cls.rightBtn}-${title.replaceAll(' ', '-')}`,
					prevEl: `.${cls.leftBtn}-${title}`,
				}}
				modules={[Navigation]}
				wrapperClass={cn(cls.sliderWrapper, [sliderClasses?.wrapper])}
				slideClass={cn(cls.slide, [sliderClasses?.slide])}
				className={cn(cls.slider, [sliderClasses?.slider])}
				wrapperChildren={
					<>
						<Button
							theme='clear'
							className={cn(cls.sliderBtn, [
								cls.leftBtn,
								`${cls.leftBtn}-${title.replaceAll(' ', '-')}`,
							])}
						>
							<Arrow color='var(--grey)' />
						</Button>
						<Button
							theme='clear'
							className={cn(cls.sliderBtn, [
								cls.rightBtn,
								`${cls.rightBtn}-${title.replaceAll(' ', '-')}`,
							])}
						>
							<Arrow color='var(--grey)' />
						</Button>
					</>
				}
			/>
		</Container>
	)
}

export { GalleryItem }
