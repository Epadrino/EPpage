import { CartProyect } from '../cards';
import { Proyects } from '@/data/proyects';
import { ButtonPrimary } from '../buttons';
import { ArrowRight } from 'lucide-react';

export const SectionProyects = () => {
	return (
		<section className="flex flex-col w-2xl border rounded-lg p-5 bg-card h-full justify-between ">
			<span className="text-2xl font-bold pb-3">Proyectos</span>
			<section className="flex flex-col gap-5 items-center justify-around h-full py-5 ">
				{Proyects.map((item) => (
					<CartProyect
						key={item.id}
						name={item.name}
						image={item.image}
						description={item.description}
						desarrollado={item.desarrollado}
						estilos={item.estilos}
						lenguaje={item.lenguaje}
						href={item.href}
						repositorie={item.repositorie}
					/>
				))}
			</section>
			<div>
				<ButtonPrimary name="ver mas" icon={<ArrowRight />} />
			</div>
		</section>
	);
};
