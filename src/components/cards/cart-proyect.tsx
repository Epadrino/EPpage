import Image from 'next/image';
import Link from 'next/link';

interface Props {
	image: string;
	name: string;
	description: string;
	desarrollado: string[];
	estilos: string[];
	language: string[];
	href: string;
	repositorie: string;
}

export const CartProyect = ({
	image,
	name,
	description,
	href,
	repositorie,
	desarrollado,
	estilos,
	language,
}: Props) => {
	return (
		<div className="flex flex-col items-center shadow-sm hover:bg-primary-foreground md:flex-row md:max-w-xl transition delay-150 duration-300 ease-in-out rounded-2xl p-2">
			<Image
				className="object-cover w-full rounded-lg h-86 md:h-auto md:w-60 "
				src={`/proyects/${image}`}
				alt="IMG"
				width={240}
				height={162}
			/>
			<div className="flex flex-col justify-between p-4 leading-normal">
				<Link href={href} className="" target="_blank">
					<h5 className="mb-2 text-xl font-bold tracking-tight">{name}</h5>
				</Link>
				<p className="mb-3 font-normal text-sm">{description}</p>

				<div className=" flex gap-2 font-normal text-sm">
					<strong>Desarrollado: </strong>

					<div className="flex gap-1">
						{desarrollado.map((d) => (
							<span key={`${d}`}>{d}</span>
						))}
					</div>
				</div>

				<div className=" flex gap-2 font-normal text-sm">
					<strong>Estilos: </strong>

					<div className="flex gap-1">
						{estilos.map((e) => (
							<span key={`${e}`}>{e}</span>
						))}
					</div>
				</div>

				<div className=" flex gap-2 font-normal text-sm">
					<strong>language: </strong>
					<div className="flex gap-1">
						{language.map((l) => (
							<span key={`${l}`}>{l}</span>
						))}
					</div>
				</div>
				<button type="button">{repositorie === '' ? '' : 'ir a repositorio'}</button>
			</div>
		</div>
	);
};
