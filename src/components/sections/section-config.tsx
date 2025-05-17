import { ToggleTheme } from '../toggle-theme';

export const SectionConfig = () => {
	return (
		<div className="flex justify-between gap-5 p-2 px-10 border rounded-lg items-center bg-card">
			<h1>
				<span className="text-2xl font-bold">EP</span>adrino
			</h1>
			<section>
				<ToggleTheme />
			</section>
		</div>
	);
};
