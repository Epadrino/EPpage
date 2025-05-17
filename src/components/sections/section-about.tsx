import { BookOpenText, ScrollText } from 'lucide-react';
import Image from 'next/image';
import { ButtonPrimary } from '../buttons/button-primary';

export const SectionAbout = () => {
	return (
		<section className="flex flex-col items-center justify-center gap-5 border rounded-lg p-5 bg-card w-full">
			<section className="flex items-center">
				<figure className="w-1/2 flex justify-center items-center mask-b-from-10% ">
					<Image alt="Imagen" src="/foto-perfil.png" width={320} height={320} className="object-contain " />
				</figure>
				<section className="w-1/2">
					<span>Hola soy</span>
					<h2 className="text-2xl font-bold py-2">Eduardo Padrino,</h2>
					<p className="">
						Aquí descubrirás mi trayectoria como programador, explorando proyectos en los cuales eh colaborado, las
						tecnologías que domino y las experiencias laborales que han forjado mi perfil. Es una ventana a mi capacidad
						para transformar ideas en proyectos tangibles.
					</p>

					<div className="flex gap-5 mt-5">
						<section className="flex items-center gap-2">
							<span className="font-bold ">Curriculum</span>
							<ButtonPrimary icon={<ScrollText />} />
						</section>
						<section className="flex items-center gap-2">
							<span className="font-bold">Cursos</span>
							<ButtonPrimary icon={<BookOpenText />} />
						</section>
					</div>
				</section>
			</section>
		</section>
	);
};
