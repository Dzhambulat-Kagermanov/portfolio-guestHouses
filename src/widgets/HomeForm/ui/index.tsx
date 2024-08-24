'use client'
import { HomeFormSaveDataOnSubmit } from '@/features/HomeFormSaveDataOnSubmit'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from 'page/Home/ui/adaptive.module.scss'

interface Props extends IClassName {
	containerClass?: string
}
const HomeForm: FC<Props> = ({ className }) => {
	return (
		<Container
			containerClass={cn(cls.container, [adt.homeFormContainer])}
			innerClass={cn(cls.homeForm, [className, adt.homeForm])}
		>
			<HomeFormSaveDataOnSubmit className={cn(cls.form)} />
		</Container>
	)
}

export { HomeForm }
