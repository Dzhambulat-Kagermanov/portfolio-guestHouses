'use client'
import { FC } from 'react'
import { IIconsProps } from '..'

const Phone: FC<IIconsProps> = ({
	color = 'black',
	className,
	width = 20,
	height = 20,
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 15 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M6.23507 8.75949C7.15452 9.71196 8.26704 10.4473 9.49447 10.9139L11.155 9.5646C11.2042 9.52998 11.2626 9.51144 11.3224 9.51144C11.3822 9.51144 11.4405 9.52998 11.4898 9.5646L14.573 11.5931C14.69 11.665 14.7891 11.7636 14.8624 11.8813C14.9357 11.999 14.9812 12.1325 14.9953 12.2712C15.0094 12.4099 14.9917 12.5501 14.9436 12.6806C14.8956 12.8112 14.8184 12.9285 14.7183 13.0234L13.2736 14.4807C13.0667 14.6894 12.8124 14.8426 12.5335 14.9266C12.2545 15.0106 11.9595 15.0227 11.6748 14.9619C8.83476 14.363 6.21707 12.9602 4.12085 10.9139C2.07116 8.84731 0.652789 6.21774 0.0377852 3.34418C-0.0229692 3.05796 -0.0102889 2.76056 0.0745972 2.48082C0.159483 2.20107 0.313697 1.94846 0.522292 1.74747L2.01986 0.2722C2.11253 0.174952 2.22555 0.100374 2.35044 0.054048C2.47534 0.00772229 2.60888 -0.00915002 2.74107 0.00469451C2.87326 0.018539 3.00067 0.0627416 3.11376 0.133992C3.22685 0.205243 3.32268 0.301696 3.3941 0.416129L5.44664 3.52409C5.48204 3.57289 5.50115 3.63202 5.50115 3.69276C5.50115 3.75349 5.48204 3.81262 5.44664 3.86142L4.09443 5.5211C4.56377 6.74941 5.295 7.85563 6.23507 8.75949Z'
				fill={color}
			/>
		</svg>
	)
}

export { Phone }
