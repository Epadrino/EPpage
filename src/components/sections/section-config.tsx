import { ToggleTheme } from '../buttons/toggle-theme';

export const SectionConfig = () => {
	return (
		<div className="flex justify-between gap-5 p-2 px-10 rounded-lg items-center border-amber-300 border-2 ">
			<h1 className="font-bold">
				<span className="text-2xl font-bold text-amber-300">EP</span>adrino
			</h1>
			<section>
				<ToggleTheme />
			</section>
		</div>
	);
};
