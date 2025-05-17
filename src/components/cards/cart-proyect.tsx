import Image from 'next/image';
import Link from 'next/link';

interface Props {
	image: string;
	name: string;
	description: string;
	desarrollado: string;
	estilos: string;
	lenguaje: string;
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
	lenguaje,
}: Props) => {
	return (
		<div className="flex flex-col items-center border rounded-lg shadow-sm hover:bg-primary-foreground md:flex-row md:max-w-xl">
			<Image
				className="object-cover w-full rounded-t-lg h-86 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg"
				src={`/proyects/${image}`}
				alt="IMG"
				width={500}
				height={500}
			/>
			<div className="flex flex-col justify-between p-4 leading-normal">
				<Link href={href} className="">
					<h5 className="mb-2 text-xl font-bold tracking-tight">{name}</h5>
				</Link>
				<p className="mb-3 font-normal text-sm">{description}</p>
				<p className="font-normal text-sm">
					<strong>Desarrollado: </strong>
					{desarrollado}
				</p>
				<p className="font-normal text-sm">
					<strong>Estilos: </strong>
					{estilos}
				</p>
				<p className="font-normal text-sm">
					<strong>Lenguaje: </strong>
					{lenguaje}
				</p>
				<button type="button">{repositorie === '' ? '' : 'ir a repositorio'}</button>
			</div>
		</div>
	);
};
