'use client'
import { cn, pathValidating } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container, Typography } from '@/shared/ui'
import { usePathname } from 'next/navigation'
import { FC, ReactNode } from 'react'
import cls from './index.module.scss'

type TActivePathProps = string[] | string
interface Props extends IClassName {
	steps: { label: string; activePath: TActivePathProps }[]
	visibleOnlyActive?: boolean
	customMarker?: { default: ReactNode; active: ReactNode }
	labelClass?: string
}
const PageSteps: FC<Props> = ({
	steps,
	className,
	visibleOnlyActive,
	customMarker,
	labelClass,
}) => {
	const PATH = usePathname()

	function checkPathIsActive(activePath: TActivePathProps) {
		if (Array.isArray(activePath)) {
			return activePath.find((el, index) => {
				return pathValidating(PATH, el)
			})
		}

		return pathValidating(PATH, activePath)
	}

	let activeItemIndex: number = -1
	const activeItem = steps.find(({ activePath }, index) => {
		if (checkPathIsActive(activePath)) activeItemIndex = index
		return checkPathIsActive(activePath)
	})

	return (
		<Container innerClass={cn(cls.steps, [className])}>
			<ul className={cn(cls.group)}>
				{(visibleOnlyActive
					? [activeItem || { label: '', activePath: '' }]
					: steps
				).map(({ label, activePath }, index) => {
					return (
						<li
							className={cn(cls.item, [], {
								[cls.activeItem]: index <= activeItemIndex,
								[cls.activeItemFull]: visibleOnlyActive,
								[cls.activeItemFull]: index < activeItemIndex,
							})}
							key={index}
						>
							{customMarker ? (
								checkPathIsActive(activePath) ? (
									customMarker.active
								) : (
									customMarker.default
								)
							) : (
								<div className={cn(cls.circle)} />
							)}
							<Typography weight='SB' className={cn(cls.label, [labelClass])}>
								{label}
							</Typography>
						</li>
					)
				})}
			</ul>
		</Container>
	)
}

export { PageSteps }
