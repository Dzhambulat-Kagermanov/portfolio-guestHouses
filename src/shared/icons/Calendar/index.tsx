import { FC } from 'react'
import { IIconsProps } from '..'

const Calendar: FC<IIconsProps> = ({
	color = 'black',
	className,
	width = 20,
	height = 20,
}) => {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox='0 0 20 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M2.66699 2.75008H3.58366V0.916748H5.41699V2.75008H14.5837V0.916748H16.417V2.75008H17.3337C18.342 2.75008 19.167 3.57508 19.167 4.58341V19.2501C19.167 20.2584 18.342 21.0834 17.3337 21.0834H2.66699C1.65866 21.0834 0.833658 20.2584 0.833658 19.2501V4.58341C0.833658 3.57508 1.65866 2.75008 2.66699 2.75008ZM2.66699 19.2501H17.3337V7.33341H2.66699V19.2501Z'
				fill={color}
			/>
		</svg>
	)
}

export { Calendar }
