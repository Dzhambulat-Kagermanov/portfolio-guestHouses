import { FC } from 'react'
import { IIconsProps } from '..'

const Arrow: FC<IIconsProps> = ({
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
			viewBox='0 0 16 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M16 5.71429L6 20L16 34.2857L14 40L-3.49691e-06 20L14 2.44784e-06L16 5.71429Z'
				fill={color}
			/>
		</svg>
	)
}

export { Arrow }
