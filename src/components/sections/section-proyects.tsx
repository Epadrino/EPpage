import { ArrowRight } from 'lucide-react';

import { Proyects } from '@/data/proyects';
import { ButtonPrimary } from '../buttons';
import { CartProyect } from '../cards';

export const SectionProyects = () => {
	return (
		<section className="flex flex-col w-2xl rounded-lg p-5 h-full justify-between border-purple-300 border-2">
			<span className="text-2xl font-bold pb-3 text-purple-300">Proyectos</span>
			<section className="flex flex-col gap-5 items-center justify-around h-full py-5 ">
				{Proyects.map((item) => (
					<CartProyect
						key={item.id}
						name={item.name}
						image={item.image}
						description={item.description}
						desarrollado={item.desarrollado}
						estilos={item.estilos}
						language={item.language}
						href={item.href}
						repositorie={item.repositorie}
					/>
				))}
			</section>
			<div>
				<ButtonPrimary name="ver mas" icon={<ArrowRight />} color="text-purple-300" />
			</div>
		</section>
	);
};
