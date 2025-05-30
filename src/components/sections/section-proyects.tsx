import { Proyects } from '@/data/proyects';

import { CartProyect } from '../cards';

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const SectionProyects = () => {
	return (
		<section className="flex flex-col lg:w-2xl rounded-lg p-5 h-full justify-between border-purple-300 border-2">
			<span className="text-2xl font-bold pb-3 text-purple-300">Proyectos</span>
			<section className="flex flex-col gap-5 items-center justify-center h-full py-5 w-full">
				<Carousel
					opts={{
						align: 'start',
						slidesToScroll: 'auto',
					}}
					orientation="vertical"
					className="w-full items-center flex"
				>
					<CarouselContent className="-mt-1 h-[550px]">
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
					</CarouselContent>
					<CarouselPrevious className="text-purple-300 border-purple-300 hover:text-purple-300 hover:border-purple-300" />
					<CarouselNext className="text-purple-300 border-purple-300 hover:text-purple-300 hover:border-purple-300" />
				</Carousel>
			</section>
		</section>
	);
};
