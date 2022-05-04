import styled from 'styled-components'

type StyledProps = {
	buttonType: string
	size?: string
}

interface Props {
	text: string
	className?: string
	handleClick: any
	type?: 'submit' | 'reset' | 'button' | undefined
	data?: any
}

function Button({
	text,
	className,
	handleClick,
	type,
	data,
}: Props): JSX.Element {
	return (
		<button
			className={className}
			onClick={
				data
					? e => {
							handleClick(e, data)
					  }
					: handleClick
			}
			type={type}
		>
			{text}
		</button>
	)
}

export const StyledButton = styled(Button)<StyledProps>`
	width: ${props =>
		props.size ? props.theme.buttons.sizes[props.size] : '200px'};
	border-radius: 5px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props =>
		props.buttonType ? props.theme.colors[props.buttonType].background : ''};
	color: ${props => props.theme.colors[props.buttonType].color};
`
