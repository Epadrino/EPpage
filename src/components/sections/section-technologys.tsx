import { Technology } from '../technology';

export const SectionTechnologys = () => {
	return (
		<section className="flex flex-col rounded-lg p-5 gap-5 w-full border-orange-300 border-2 lg:h-full">
			<span className="text-2xl font-bold text-orange-300">Tecnologías</span>
			<section className="flex flex-col lg:flex-row gap-5 w-full justify-around">
				<section className="rounded-lg p-5 bg-orange-300/10">
					<div className="pb-2">
						<span className="text-xl font-bold text-orange-300/70">Frontend</span>
					</div>
					<div className="flex flex-col lg:flex-row gap-5 ">
						<section className="flex flex-wrap gap-5 justify-center">
							<Technology image="html.svg" name="HTML" />
							<Technology image="css.svg" name="CSS" />
							<Technology image="react.svg" name="React" />
							<Technology image="nextjs.svg" name="Next" />
							<Technology image="tailwind.svg" name="tailwind" />
							<Technology image="styled-componts.png" name="styled-componts" />
						</section>
					</div>
				</section>

				<section className="rounded-lg p-5 bg-orange-300/10">
					<div className="pb-2">
						<span className="text-xl font-bold text-orange-300/70">languages</span>
					</div>

					<div className="flex gap-10 justify-center">
						<Technology image="javaScript.svg" name="javaScript" />
						<Technology image="typescript.png" name="Typescript" />
						<Technology image="c++.svg" name="C++" />
					</div>
				</section>

				<section className="rounded-lg p-5 bg-orange-300/10">
					<div className="pb-2">
						<span className="text-xl font-bold text-orange-300/70">Controles</span>
					</div>
					<div className="flex gap-10 justify-center">
						<Technology image="git.svg" name="Git" />
						<Technology image="github.svg" name="GitHub" />
					</div>
				</section>
			</section>
		</section>
	);
};
