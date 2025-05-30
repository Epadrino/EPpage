interface Props {
	name?: string;
	icon?: React.ReactNode;
	typeButton?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: () => void;
	color: string;
}

export const ButtonPrimary = ({ name, icon, typeButton = 'button', color, onClick }: Props) => {
	return (
		<button
			type={typeButton}
			className={`flex gap-2 font-medium p-2 rounded-sm cursor-pointer bg-popover hover:bg-popover-foreground/10 ${color} w-full justify-center transition delay-150 duration-300 ease-in-out`}
			onClick={onClick}
		>
			{icon}
			{name}
		</button>
	);
};
