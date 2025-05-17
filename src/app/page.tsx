import { SectionAbout, SectionTecnologis, SectionProyects, SectionConfig, SectionContac } from '../components/sections';

export default function Home() {
	return (
		<main className="grid w-dvw h-dvh p-20 py-5 gap-5 relative">
			<SectionConfig />
			<section className="grid grid-flow-col gap-5">
				<section className="col-span-1">
					<SectionAbout />
				</section>
				<section className="col-span-1">
					<SectionTecnologis />
				</section>
				<section className="col-span-1">
					<SectionContac />
				</section>
				<section className="row-span-3 row-start-1 col-start-2">
					<SectionProyects />
				</section>
			</section>
		</main>
	);
}
