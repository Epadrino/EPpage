'use client';

import { BookOpenText, ScrollText } from 'lucide-react';
import Image from 'next/image';
import { ButtonPrimary } from '../buttons/button-primary';
import { useState } from 'react';
import { Modal } from '../modals';
import Link from 'next/link';
import { Courses } from '../courses';

export const SectionAbout = () => {
	const [openModal, setOpenModal] = useState(false);

	const handledOpenModal = () => {
		setOpenModal(!openModal);
	};

	return (
		<section className="flex flex-col items-center justify-center rounded-lg p-5 border-blue-300 border-2 w-full">
			<span className="text-2xl font-bold text-blue-300 w-full ">Sobre mi</span>
			<section className="flex items-center">
				<figure className="w-1/2 flex justify-center items-center mask-b-from-10% ">
					<Image alt="Imagen" src="/foto-perfil.png" width={280} height={280} className="object-contain " />
				</figure>
				<section className="w-1/2">
					<span>Hola soy</span>
					<h2 className="text-2xl font-bold py-2 ">Eduardo Padrino,</h2>
					<p className="">
						Aquí descubrirás mi trayectoria como programador, explorando proyectos en los cuales eh colaborado, las
						tecnologías que domino y las experiencias laborales que han forjado mi perfil. Es una ventana a mi capacidad
						para transformar ideas en proyectos tangibles.
					</p>

					<div className="flex gap-5 mt-5">
						<section className="flex items-center gap-2">
							<Link href="./documents/cv-eduardo-p.pdf" target="_blank" rel="noopener noreferrer">
								<ButtonPrimary icon={<ScrollText />} color="text-blue-300" name="Curriculum" />
							</Link>
						</section>
						<section className="flex items-center gap-2">
							<ButtonPrimary icon={<BookOpenText />} onClick={handledOpenModal} color="text-blue-300" name="Cursos" />
							{openModal && <Modal name="Cursos" content={<Courses />} setActModal={handledOpenModal} />}
						</section>
					</div>
				</section>
			</section>
		</section>
	);
};
