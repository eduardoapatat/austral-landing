export type Ratio = '2/3' | '3/4' | '1/1' | '4/5';

export interface Product {
	title: string;
	price: string;
	category: string;
	ratio: Ratio;
	/** IDs de picsum: imagen principal y alternativa (la que aparece en hover). */
	photo: number;
	altPhoto: number;
}

/** Colocación en la rejilla: columna y ancho en 4 columnas (lg) y en 2 columnas (móvil/tablet). */
export interface Placement {
	product: Product;
	col: 1 | 2 | 3 | 4;
	span?: 1 | 2;
	offset?: boolean;
	mobileCol?: 1 | 2;
}

const sizes: Record<Ratio, [number, number]> = {
	'2/3': [600, 900],
	'3/4': [600, 800],
	'1/1': [700, 700],
	'4/5': [800, 1000],
};

export const photoUrl = (id: number, ratio: Ratio, scale = 1) => {
	const [w, h] = sizes[ratio];
	return { src: `https://picsum.photos/id/${id}/${w * scale}/${h * scale}`, width: w * scale, height: h * scale };
};

const product = (title: string, price: string, category: string, ratio: Ratio, photo: number, altPhoto: number): Product => ({
	title,
	price,
	category,
	ratio,
	photo,
	altPhoto,
});

export const blocks: Placement[][] = [
	[
		{ product: product('Rejilla Base', '€36,00', 'Ropa', '2/3', 10, 11), col: 1 },
		{ product: product('Kerning Abierto', '€25,00', 'Accesorios', '2/3', 12, 13), col: 2 },
		{ product: product('Peso 900', '€30,00', 'Ropa', '2/3', 15, 16), col: 3 },
		{ product: product('Línea de Base', '€30,00', 'Objetos', '2/3', 17, 18), col: 4 },
	],
	[
		{ product: product('Contraforma', '€30,00', 'Accesorios', '3/4', 19, 20), col: 1 },
		{ product: product('Interlineado', '€20,00', 'Ropa', '1/1', 22, 24), col: 2 },
		{ product: product('Margen Blanco', '€25,00', 'Objetos', '4/5', 25, 26), col: 3, span: 2 },
	],
	[
		{ product: product('Columna Cuatro', '€30,00', 'Ropa', '1/1', 27, 28), col: 1 },
		{ product: product('Ojo Medio', '€30,00', 'Ropa', '2/3', 29, 30), col: 3, offset: true },
		{ product: product('Tracking Negativo', '€30,00', 'Accesorios', '3/4', 42, 48), col: 4, mobileCol: 2 },
	],
	[
		{ product: product('Versalita', '€30,00', 'Accesorios', '1/1', 64, 65), col: 1, span: 2 },
		{ product: product('Cuerpo 11', '€33,00', 'Ropa', '3/4', 1, 2), col: 4, offset: true, mobileCol: 2 },
	],
];

export interface Category {
	name: string;
	href: string;
	/** Miniatura intercalada antes o después de la palabra; mobile: false la oculta en móvil. */
	thumb?: { photo: number; shape: 'wide' | 'square'; side: 'before' | 'after'; mobile?: boolean };
}

export const categories: Category[] = [
	{ name: 'Camisetas', href: '#tienda', thumb: { photo: 54, shape: 'wide', side: 'after' } },
	{ name: 'Sudaderas', href: '#tienda', thumb: { photo: 55, shape: 'square', side: 'before', mobile: false } },
	{ name: 'Gorras', href: '#tienda' },
	{ name: 'Bolsos', href: '#tienda', thumb: { photo: 56, shape: 'wide', side: 'after', mobile: false } },
	{ name: 'Abrigos', href: '#tienda' },
	{ name: 'Edición limitada', href: '#tienda', thumb: { photo: 57, shape: 'square', side: 'before', mobile: false } },
];
