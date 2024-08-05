'use client'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Typography } from '@/shared/ui/Typography/Typography'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import cls from './FeatureButton.module.scss'

interface Props extends IClassName, Pick<IRoomsCardAllData, 'slug'> {}
const FeatureButton: FC<Props> = ({ className, slug }) => {
	const router = useRouter()
	return (
		<Button
			className={cn(cls.featureBtn, [className])}
			onClick={() => {
				router.push(`/rooms/${slug}`)
			}}
		>
			<Typography weight='M'>Выбрать</Typography>
		</Button>
	)
}

export default FeatureButton
