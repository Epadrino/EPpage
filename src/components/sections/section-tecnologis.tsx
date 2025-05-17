import { Tecnologi } from '../tecnologi';

export const SectionTecnologis = () => {
	return (
		<section className="flex flex-col border rounded-lg p-5 gap-5 bg-card w-full">
			<span className="text-2xl font-bold">Tecnologias</span>
			<section className="flex gap-10 w-full justify-around">
				<section>
					<span className="text-xl font-bold ">Frontend</span>
					<div className="flex flex-col">
						<section className="flex gap-10 justify-center">
							<Tecnologi image="html.svg" name="HTML" />
							<Tecnologi image="css.svg" name="CSS" />
							<Tecnologi image="react.svg" name="React" />
						</section>
						<section className="flex gap-10 justify-center">
							<Tecnologi image="nextjs.svg" name="Next" />
							<Tecnologi image="tailwind.svg" name="tailwind" />
							<Tecnologi image="styled-componts.png" name="styled-componts" />
						</section>
					</div>
				</section>

				<section>
					<span className="text-xl font-bold pb-3">Lenguajes</span>
					<div className="flex gap-10 ">
						<Tecnologi image="javaScript.svg" name="javaScript" />
						<Tecnologi image="c++.svg" name="C++" />
					</div>
				</section>

				<section>
					<span className="text-xl font-bold pb-3">Controles</span>
					<div className="flex gap-10">
						<Tecnologi image="git.svg" name="Git" />
						<Tecnologi image="github.svg" name="GitHub" />
					</div>
				</section>
			</section>
		</section>
	);
};
