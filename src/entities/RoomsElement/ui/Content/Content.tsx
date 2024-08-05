'use client'
import { cn } from '@/shared/lib'
import { IRoomsCardInfoData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Slider } from '@/shared/ui/Slider/Slider'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC, ReactNode, useState } from 'react'
import cls from './Content.module.scss'

interface Props
	extends IClassName,
		Omit<
			IRoomsCardInfoData,
			'conditions' | 'roomImages' | 'services' | 'description'
		> {
	services: ReactNode[]
}
const Content: FC<Props> = ({
	previewDescription,
	services,
	className,
	title,
}) => {
	const [servicesIsExpand, setServicesIsExpand] = useState<boolean>(false)
	return (
		<div className={cn(cls.content, [className])}>
			<Typography weight='SB' tag='h2' className={cn(cls.title)}>
				{title}
			</Typography>
			<Typography weight='R' tag='h3' className={cn(cls.description)}>
				{previewDescription}
			</Typography>
			{servicesIsExpand && (
				<Slider
					resistanceRatio={0}
					slidesPerView='auto'
					spaceBetween={15}
					className={cn(cls.slider)}
					wrapperClass={cn(cls.sliderWrapper)}
					slideClass={cn(cls.slide)}
					items={services}
				/>
			)}
			<Button
				theme='outlined'
				onClick={() => {
					setServicesIsExpand(current => !current)
				}}
				className={cn(cls.button, [], { [cls.expandBtn]: servicesIsExpand })}
			>
				<Typography weight='M'>
					{servicesIsExpand ? 'Скрыть' : 'Подробнее'}
				</Typography>
			</Button>
		</div>
	)
}

export default Content
