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
}
const GalleryItem: FC<Props> = ({ photos, title, className }) => {
	return (
		<Container
			innerClass={cn(cls.gallery, [className])}
			containerClass={cn(cls.container)}
		>
			<Typography tag='h2' className={cn(cls.title)} weight='SB'>
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
				loop
				slidesPerView={'auto'}
				navigation={{
					nextEl: `.${cls.rightBtn}-${title.replaceAll(' ', '-')}`,
					prevEl: `.${cls.leftBtn}-${title}`,
				}}
				modules={[Navigation]}
				wrapperClass={cn(cls.sliderWrapper)}
				slideClass={cn(cls.slide)}
				className={cn(cls.slider)}
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
