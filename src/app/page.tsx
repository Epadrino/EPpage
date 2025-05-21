import {
	SectionAbout,
	SectionTechnologys,
	SectionProyects,
	SectionConfig,
	SectionContac,
} from '../components/sections';

export default function Home() {
	return (
		<div className="grid items-center w-screen-5 h-screen">
			<main className="grid p-2 gap-5 relative max-w-[1800px] mx-auto ">
				<SectionConfig />
				<section className="grid lg:grid-flow-col gap-5">
					<section className="lg:col-span-1">
						<SectionAbout />
					</section>
					<section className="lg:col-span-1">
						<SectionTechnologys />
					</section>
					<section className="lg:col-span-1">
						<SectionContac />
					</section>
					<section className="lg:row-span-3 lg:row-start-1 lg:col-start-2">
						<SectionProyects />
					</section>
				</section>
			</main>
		</div>
	);
}
