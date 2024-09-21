'use client'
import { FC, useState } from 'react'
import cls from './index.module.scss'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { RoomsElementAddService } from '@/features/RoomsElementAddService'
import { User } from '@/shared/icons'
import { cn, endingsFormatter } from '@/shared/lib'
import { Slider, Typography } from '@/shared/ui'
import { Button } from '@/shared/ui'

interface Props
	extends IClassName,
		Omit<IRoomsCardAllData, 'roomImages' | 'description'> {}
const AdaptiveRoomsCard: FC<Props> = ({
	className,
	availableRooms,
	conditions,
	previewDescription,
	previewImg,
	services,
	slug,
	title,
	maxGuests,
}) => {
	const [expand, setExpand] = useState<boolean>(false)

	return (
		<li className={cn(cls.item, [className])} key={slug}>
			<div className={cn(cls.content)}>
				<div className={cn(cls.image)}>
					<img src={previewImg} alt={title} />
					<Typography weight='M' className={cn(cls.available)} tag='h2'>
						В наличии
						{' ' + availableRooms + ' '}
						{endingsFormatter({
							itemQuantity: availableRooms,
							pluralEnding: 'номеров',
							singPluralEnding: 'номера',
							singularEnding: 'номер',
						})}
					</Typography>
					<div className={cn(cls.guests)}>
						<Typography weight='B'>{maxGuests}</Typography>
						<User color='var(--white)' width={16} height={16} />
					</div>
				</div>
				<div className={cn(cls.info)}>
					<Typography weight='SB' tag='h2'>
						{title}
					</Typography>
					<Typography weight='R' tag='h3'>
						{previewDescription}
					</Typography>
					<div className={cn(cls.conditions)}>
						{conditions.map(({ description, title }) => (
							<Typography weight='M' key={title}>
								<strong>{title}: </strong>
								{description}
							</Typography>
						))}
					</div>
					{services.length > 2 && (
						<Button
							className={cn(cls.servicesBtn, [], { [cls.expanded]: expand })}
							onClick={() => {
								setExpand(current => !current)
							}}
						>
							<Typography weight='SB'>
								{expand ? 'Скрыть' : 'Все сервисы'}
							</Typography>
						</Button>
					)}
				</div>
				{services.length > 0 && (
					<div className={cn(cls.services)}>
						{services.slice(0, 2).map(service => (
							<RoomsElementAddService
								roomsElementServicesClass={cn(cls.service)}
								key={service.title}
								service={service}
								slug={slug}
							/>
						))}
					</div>
				)}
			</div>
			{services.length > 2 && (
				<div className={cn(cls.services, [], { [cls.expanded]: expand })}>
					<Slider
						resistanceRatio={0}
						slidesPerView={'auto'}
						className={cn(cls.slider)}
						wrapperClass={cn(cls.wrapper)}
						slideClass={cn(cls.slide)}
						items={services.slice(2).map(service => (
							<div className={cn(cls.service)} key={service.title}>
								<RoomsElementAddService service={service} slug={slug} />
							</div>
						))}
					/>
				</div>
			)}
		</li>
	)
}

export { AdaptiveRoomsCard }
