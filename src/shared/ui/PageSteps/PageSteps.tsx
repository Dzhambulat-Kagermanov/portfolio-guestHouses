'use client'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
import { usePathname } from 'next/navigation'
import { FC, ReactNode } from 'react'
import cls from './PageSteps.module.scss'

interface Props extends IClassName {
	steps: { label: string; activePath: string }[]
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

	const ActiveItemIndex = steps.findIndex(({ activePath }) => {
		return activePath === PATH
	})

	return (
		<Container innerClass={cn(cls.steps, [className])}>
			<ul className={cn(cls.group)}>
				{(visibleOnlyActive
					? steps.filter(({ activePath }) => activePath === PATH)
					: steps
				).map(({ label, activePath }, index) => (
					<li
						className={cn(cls.item, [], {
							[cls.activeItem]: index <= ActiveItemIndex,
							[cls.activeItemFull]: visibleOnlyActive,
							[cls.activeItemFull]: index < ActiveItemIndex,
						})}
						key={index}
					>
						{customMarker ? (
							activePath === PATH ? (
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
				))}
			</ul>
		</Container>
	)
}

export { PageSteps }
