import { FC } from 'react'
import { IIconsProps } from '..'

const TriangleArrow: FC<IIconsProps> = ({
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
			viewBox='0 0 14 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M7 12L0.937823 0.749999L13.0622 0.75L7 12Z' fill={color} />
		</svg>
	)
}

export { TriangleArrow }
