import type { PhotoKey } from './photos';

export type Ratio = '2/3' | '3/4' | '1/1' | '4/5';

export const SIZES = ['XS', 'S', 'M', 'L', 'XL'] as const;
/** Las mismas categorías etiquetan los productos y alimentan el índice que filtra la tienda. */
export const CATEGORIES = ['Chaquetas', 'Polares', 'Camisas', 'Punto', 'Accesorios'] as const;
export type Category = (typeof CATEGORIES)[number];
export const categorySlug = (category: Category) => category.toLowerCase();
export type Size = (typeof SIZES)[number];

export interface Product {
	title: string;
	price: string;
	category: Category;
	ratio: Ratio;
	/** Foto principal y alternativa (la que aparece en hover), claves de data/photos. */
	photo: PhotoKey;
	altPhoto: PhotoKey;
	/** Tallas agotadas: se muestran tachadas en la franja de tallas. */
	soldOut: Size[];
}

/** Colocación en la rejilla: columna y ancho en 4 columnas (lg) y en 2 columnas (móvil/tablet). */
export interface Placement {
	product: Product;
	col: 1 | 2 | 3 | 4;
	span?: 1 | 2;
	offset?: boolean;
	mobileCol?: 1 | 2;
}

const product = (
	title: string,
	price: string,
	category: Category,
	ratio: Ratio,
	photo: PhotoKey,
	altPhoto: PhotoKey,
	soldOut: Size[] = [],
): Product => ({
	title,
	price,
	category,
	ratio,
	photo,
	altPhoto,
	soldOut,
});

// Cada bloque cambia de ritmo (ancha a la izquierda, ancha a la derecha, filas sueltas) y deja huecos a propósito.
// Abre la Parka Aysén en grande: es la pieza destacada de la colección.
export const blocks: Placement[][] = [
	[
		{
			product: product('Parka Aysén', '$189.990', 'Chaquetas', '4/5', 'parka-aysen', 'parka-aysen-alt'),
			col: 1,
			span: 2,
		},
		{
			product: product('Gorro Cochamó', '$19.990', 'Accesorios', '1/1', 'gorro-cochamo', 'gorro-cochamo-alt'),
			col: 4,
			offset: true,
			mobileCol: 2,
		},
	],
	[
		{
			product: product('Polar Puyuhuapi', '$69.990', 'Polares', '2/3', 'polar-puyuhuapi', 'polar-puyuhuapi-alt', [
				'XS',
				'XL',
			]),
			col: 1,
		},
		{
			product: product('Franela Chiloé', '$49.990', 'Camisas', '2/3', 'franela-chiloe', 'franela-chiloe-alt'),
			col: 2,
			offset: true,
		},
		{
			product: product('Chaqueta Tortel', '$129.990', 'Chaquetas', '4/5', 'chaqueta-tortel', 'chaqueta-tortel-alt'),
			col: 3,
			span: 2,
		},
	],
	[
		{
			product: product(
				'Mochila Futaleufú',
				'$84.990',
				'Accesorios',
				'3/4',
				'mochila-futaleufu',
				'mochila-futaleufu-alt',
			),
			col: 2,
		},
		{
			product: product('Chaleco Achao', '$59.990', 'Punto', '2/3', 'chaleco-achao', 'chaleco-achao-alt'),
			col: 3,
			offset: true,
		},
		{
			product: product(
				'Cortavientos Torres',
				'$94.990',
				'Chaquetas',
				'3/4',
				'cortavientos-torres',
				'cortavientos-torres-alt',
			),
			col: 4,
		},
	],
	[
		{
			product: product('Sweater Dalcahue', '$74.990', 'Punto', '1/1', 'sweater-dalcahue', 'sweater-dalcahue-alt'),
			col: 1,
		},
		{
			product: product('Camisa Castro', '$44.990', 'Camisas', '1/1', 'camisa-castro', 'camisa-castro-alt', ['M']),
			col: 3,
			offset: true,
			mobileCol: 2,
		},
	],
	[
		{
			product: product('Guantes Cochamó', '$24.990', 'Accesorios', '3/4', 'guantes-cochamo', 'guantes-cochamo-alt', [
				'XS',
				'S',
			]),
			col: 1,
			offset: true,
		},
		{
			product: product('Bufanda Natales', '$29.990', 'Punto', '1/1', 'bufanda-natales', 'bufanda-natales-alt'),
			col: 3,
			span: 2,
		},
	],
];

/** Todos los productos en el orden de la rejilla editorial. */
export const products = blocks.flat().map(({ product }) => product);

export const featured = {
	name: 'Parka Aysén',
	price: '$189.990',
	description:
		'Una parka de algodón encerado con forro de lana, pensada para la lluvia y el viento de Aysén. Capucha ajustable, cuatro bolsillos con solapa y costuras selladas.',
	specs: [
		['Material', 'Algodón encerado y forro de lana'],
		['Gramaje', '420 g/m²'],
		['Corte', 'Recto, largo a la cadera'],
		['Tallas', 'XS – XL'],
		['Origen', 'Hecho en Puerto Montt'],
	] as [string, string][],
	colors: [
		{ name: 'Musgo', hex: '#4a5a3a' },
		{ name: 'Hueso', hex: '#e9e1d2' },
		{ name: 'Carbón', hex: '#2b2b2b' },
	],
	band: 'band-chiloe' as PhotoKey,
	photos: ['destacado-1', 'destacado-2'] as PhotoKey[],
};
