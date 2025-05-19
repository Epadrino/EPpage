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

export const CartProyect2 = ({
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
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
			<Link href={href}>
				<Image className="rounded-t-lg" src={`/proyects/${image}`} alt="IMG" width={240} height={162} />
			</Link>

			<div className="p-5">
				<Link href={href}>
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
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
				<Link
					href={href}
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Read more
					<svg
						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
};
