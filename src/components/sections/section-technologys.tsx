import { Technology } from '../technology';

export const SectionTechnologys = () => {
	return (
		<section className="flex flex-col rounded-lg p-5 gap-5 w-full border-orange-300 border-2">
			<span className="text-2xl font-bold text-orange-300">technologyas</span>
			<section className="flex gap-5 w-full justify-around">
				<section className="border-orange-200/5 border rounded-lg p-5">
					<div className="pb-2">
						<span className="text-xl font-bold text-orange-300/70">Frontend</span>
					</div>
					<div className="flex flex-col gap-5">
						<section className="flex gap-10 justify-center">
							<Technology image="html.svg" name="HTML" />
							<Technology image="css.svg" name="CSS" />
							<Technology image="react.svg" name="React" />
							<Technology image="nextjs.svg" name="Next" />
							<Technology image="tailwind.svg" name="tailwind" />
							<Technology image="styled-componts.png" name="styled-componts" />
						</section>
					</div>
				</section>

				<section className="border-orange-200/5 border rounded-lg p-5">
					<div className="pb-2">
						<span className="text-xl font-bold pb-3 text-orange-300/70">languages</span>
					</div>

					<div className="flex gap-10 ">
						<Technology image="javaScript.svg" name="javaScript" />
						<Technology image="c++.svg" name="C++" />
					</div>
				</section>

				<section className="border-orange-200/5 border rounded-lg p-5">
					<div className="pb-2">
						<span className="text-xl font-bold pb-3 text-orange-300/70">Controles</span>
					</div>
					<div className="flex gap-10">
						<Technology image="git.svg" name="Git" />
						<Technology image="github.svg" name="GitHub" />
					</div>
				</section>
			</section>
		</section>
	);
};
