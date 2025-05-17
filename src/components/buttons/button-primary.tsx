interface Props {
	name?: string;
	icon: React.ReactNode;
}
export const ButtonPrimary = ({ name, icon }: Props) => {
	return (
		<button
			type="button"
			className="flex gap-2 font-medium p-2 rounded-sm cursor-pointer hover:bg-primary-foreground bg-primary text-foreground w-full justify-center"
		>
			{icon}
			{name}
		</button>
	);
};
