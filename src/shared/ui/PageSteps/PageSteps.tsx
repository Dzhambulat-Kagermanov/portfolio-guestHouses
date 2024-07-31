import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC, ReactNode } from 'react'
import cls from './PageSteps.module.scss'

interface Props extends IClassName {
	steps: { label: string; state: boolean }[]
	stepsVariants?: 'multi' | 'one-by-one'
	visibleOnlyActive?: boolean
	customMarker?: { default: ReactNode; active: ReactNode }
	labelClass?: string
	lineClass?: string
}
const PageSteps: FC<Props> = ({
	steps,
	className,
	stepsVariants,
	visibleOnlyActive,
	customMarker,
	labelClass,
	lineClass,
}) => {
	return (
		<Container innerClass={cn(cls.steps, [className])}>
			<div className={cn(cls.line, [lineClass])} />
			<ul className={cn(cls.group)}>
				{visibleOnlyActive
					? 1
					: steps.map(({ label, state }, index) => (
							<li
								className={cn(cls.item, [], { [cls.activeItem]: state })}
								key={index}
							>
								{customMarker ? (
									state ? (
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
