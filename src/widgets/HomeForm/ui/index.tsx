'use client'
import { HomeFormElement } from '@/entities/HomeFormElement'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	containerClass?: string
}
const HomeForm: FC<Props> = ({ className }) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.homeForm, [className])}
		>
			<HomeFormElement className={cn(cls.form)} />
		</Container>
	)
}

export { HomeForm }
