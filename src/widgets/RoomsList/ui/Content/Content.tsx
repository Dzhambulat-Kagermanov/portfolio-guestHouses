'use client'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Slider } from '@/shared/ui/Slider/Slider'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC, useState } from 'react'
import ServiceGroup from '../ServiceGroup/ServiceGroup'
import cls from './Content.module.scss'

interface Props extends IClassName {
	title: string
	services: { id: number; label: string; night: string; price: number }[]
	description: string
}
const Content: FC<Props> = ({ className, services, description, title }) => {
	const [servicesState, setServicesState] = useState<boolean>(false)

	return (
		<div className={cn(cls.roomsCardContent, [className])}>
			<Paragraph
				title={title}
				paragraphs={[description]}
				className={cn(cls.paragraphs)}
				titleClass={cn(cls.title)}
				paragraphsClass={cn(cls.paragraphsItem)}
			/>
			{servicesState && (
				<Slider
					spaceBetween={16}
					slidesPerView={'auto'}
					className={cn(cls.slider)}
					wrapperClass={cn(cls.sliderWrapper)}
					slideClass={cn(cls.slide)}
					freeMode
					resistanceRatio={0}
					items={services.map(({ id, label, night, price }) => (
						<ServiceGroup
							className={cn(cls.serviceGroup)}
							labelText={label}
							key={id}
							nightsText={night}
							price={price}
						/>
					))}
				/>
			)}
			<Button
				theme='fill'
				className={cn(cls.button, [], {
					[cls.active]: servicesState,
				})}
				onClick={() => {
					setServicesState(current => !current)
				}}
			>
				<Typography weight='M'>
					{servicesState ? 'Скрыть' : 'Подробнее'}
				</Typography>
			</Button>
		</div>
	)
}

export default Content
