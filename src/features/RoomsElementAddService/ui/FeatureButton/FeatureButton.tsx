'use client'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData, TService } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Typography } from '@/shared/ui/Typography/Typography'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import cls from './FeatureButton.module.scss'

interface Props extends IClassName, Pick<IRoomsCardAllData, 'slug'> {
	service: TService
}
const FeatureButton: FC<Props> = ({ className, slug, service }) => {
	const router = useRouter()
	return (
		<Button
			className={cn(cls.featureBtn, [className])}
			onClick={() => {
				router.push(`/rooms/${slug}?service=${service.title}`)
			}}
		>
			<Typography weight='M'>Выбрать</Typography>
		</Button>
	)
}

export default FeatureButton
