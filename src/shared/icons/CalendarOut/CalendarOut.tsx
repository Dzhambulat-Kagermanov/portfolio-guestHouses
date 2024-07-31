import { FC } from 'react'
import { IIconsProps } from '..'

const CalendarOut: FC<IIconsProps> = ({
	color = 'black',
	className,
	width = 20,
	height = 20,
}) => {
	return (
		<svg
			width='25'
			height='21'
			viewBox='0 0 25 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1.8335 1.83333H2.75016V0H4.5835V1.83333H13.7502V0H15.5835V1.83333H16.5002C17.5085 1.83333 18.3335 2.65833 18.3335 3.66667V18.3333C18.3335 19.3417 17.5085 20.1667 16.5002 20.1667H1.8335C0.825163 20.1667 0.000162125 19.3417 0.000162125 18.3333V3.66667C0.000162125 2.65833 0.825163 1.83333 1.8335 1.83333ZM1.8335 18.3333H16.5002V6.41667H1.8335V18.3333Z'
				fill='white'
			/>
			<path
				d='M24.3536 12.3536C24.5488 12.1583 24.5488 11.8417 24.3536 11.6464L21.1716 8.46447C20.9763 8.2692 20.6597 8.2692 20.4645 8.46447C20.2692 8.65973 20.2692 8.97631 20.4645 9.17157L23.2929 12L20.4645 14.8284C20.2692 15.0237 20.2692 15.3403 20.4645 15.5355C20.6597 15.7308 20.9763 15.7308 21.1716 15.5355L24.3536 12.3536ZM12 12.5L24 12.5V11.5L12 11.5V12.5Z'
				fill={color}
			/>
		</svg>
	)
}

export { CalendarOut }
