'use client'
import { HomeFormSaveDataOnSubmit } from '@/features/HomeFormSaveDataOnSubmit'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container } from '@/shared/ui'
import { FC } from 'react'
import { HomeFormElement } from '@/entities/HomeFormElement'
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
			<HomeFormElement
				className={cn(cls.form, [className, adt.form])}
				featureBtn={
					<HomeFormSaveDataOnSubmit
						className={cn(cls.submitBtn, [adt.submitBtn])}
					/>
				}
			/>
		</Container>
	)
}

export { HomeForm }
