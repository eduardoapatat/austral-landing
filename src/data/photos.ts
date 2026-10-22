import type { ImageMetadata } from 'astro';

/**
 * Fotografías de Unsplash (licencia libre), descargadas en src/assets/photos.
 * Se guarda autor y usuario de cada una como referencia; la lista de créditos está en README.md.
 */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

export interface Photo {
	src: ImageMetadata;
	alt: string;
	author: string;
	/** Usuario de Unsplash, sin la @. */
	user: string;
}

const meta = {
	'hero-torres': ['Cuernos del Paine sobre un lago turquesa en Torres del Paine', 'Adam Young', 'hossua34'],
	'band-chiloe': ['Isla cubierta de bosque en un canal de Chiloé con niebla', 'Chalo Gallardo', 'chalogallardo'],
	'iglesia-chiloe': ['Iglesia de madera chilota con su torre, sobre un prado', 'Sebastian Olivos', 'seeeebaaa44'],
	'ruta-torres': ['Dos caminantes con mochila en un sendero hacia las torres', 'Toomas Tartes', 'toomastartes'],
	'ruta-costa': ['Hombre con chaqueta frente al mar revuelto en una costa rocosa', 'Nathan Dumlao', 'nate_dumlao'],
	'ruta-bosque': ['Caminante con chaqueta naranja en un sendero de bosque', 'Bryan Walker', 'bryanmillarwalker'],
	'proceso-lana': ['Ovillo de lana y tejido a mano sobre una mesa de madera', 'Oksana Maselko', 'oksana_maselko'],
	'proceso-taller': ['Manos guiando una tela en una máquina de coser', 'alex jhonson', 'alexjhonson23e'],
	'parka-aysen': [
		'Persona de espaldas con parka verde musgo caminando por un bosque nevado',
		'Oleg Ivanov',
		'olegivanovpht',
	],
	'parka-aysen-alt': [
		'Persona de espaldas con parka verde y capucha de piel en una calle con árboles',
		'Adam Birkett',
		'abrkett',
	],
	'polar-puyuhuapi': ['Mujer con polar en un campo abierto', 'Konrad Nowacki', 'knowacki'],
	'polar-puyuhuapi-alt': ['Chaqueta de polar café colgada en una pared de madera', 'Nikola Tasic', 'tasae34'],
	'franela-chiloe': ['Hombre con camisa de franela a cuadros sobre una roca', 'Brooke Cagle', 'brookecagle'],
	'franela-chiloe-alt': [
		'Camisas de franela a cuadros colgadas en un perchero',
		'Jonathan Adams',
		'jonathanadamsphoto',
	],
	'gorro-cochamo': ['Mano sosteniendo un gorro de lana color tabaco', 'Iamninoslav', 'iamninoslav'],
	'gorro-cochamo-alt': [
		'Hombre bajándose un gorro verde sobre los ojos al aire libre',
		'Danial Dezfouli',
		'withdanial',
	],
	'mochila-futaleufu': [
		'Caminante de espaldas con mochila roja frente a montañas nevadas',
		'Zachary Kyra-Derksen',
		'zachaery',
	],
	'mochila-futaleufu-alt': ['Persona con mochila caminando entre vegetación', 'Holly Mandarich', 'hollymandarich'],
	'camisa-castro': ['Hombre con barba y camisa a cuadros', 'Coleman Glover', 'colemangloverphotography'],
	'camisa-castro-alt': ['Camisa a cuadros azul, blanca y café en un colgador', 'the blowup', 'theblowup'],
	'chaqueta-tortel': ['Chaqueta encerada color oliva en primer plano', 'Kyle Loftus', 'kyleloftusstudios'],
	'chaqueta-tortel-alt': ['Hombre con chaqueta encerada en un campo con árboles', 'Rydale Clothing', 'rydaleclothing'],
	'sweater-dalcahue': ['Hombre con sweater de lana oscuro', 'David Suarez', 'davidprspctive'],
	'sweater-dalcahue-alt': ['Sweaters de lana doblados y apilados', 'Tijana Drndarski', 'izgubljenausvemiru'],
	'chaleco-achao': ['Mujer con chaleco de punto gris sobre una camisa negra', 'Rizky Motion', 'rizky_motion'],
	'chaleco-achao-alt': ['Tejido de punto azul marino en las agujas', 'Laura Ohlman', 'ohlmanphotography'],
	'cortavientos-torres': [
		'Hombre con cortavientos verde y mochila frente a montañas nevadas',
		'Franco Figueroa',
		'ocnarf278',
	],
	'cortavientos-torres-alt': ['Hombre con chaqueta negra y gorro de lana sobre una roca', 'Tom Allport', 't_mallp_rt'],
	'bufanda-natales': ['Mujer con chal tejido a crochet al aire libre', 'Lance Reis', 'lancereis'],
	'bufanda-natales-alt': ['Bufanda de lana gris enrollada sobre madera', 'Maria Kovalets', 'marylooo'],
	'guantes-cochamo': ['Mano con guante de lana tejido en la nieve', 'Tamara Gak', 'tamara_photography'],
	'guantes-cochamo-alt': ['Manos con guantes blancos sosteniendo hojas secas', 'Aren Nagulyan', 'arennagulyan_photo'],
	'destacado-1': ['Persona con parka oscura de pie en una ladera', 'Ryan Kwok', 'milkbox'],
	'destacado-2': ['Mujer con parka negra con capucha de piel', 'Riccardo Agostinelli', 'riccardoagostinelli'],
} as const;

export type PhotoKey = keyof typeof meta;

export const photos = Object.fromEntries(
	Object.entries(meta).map(([key, [alt, author, user]]) => {
		const file = files[`../assets/photos/${key}.jpg`];
		if (!file) throw new Error(`Falta la foto src/assets/photos/${key}.jpg`);
		return [key, { src: file.default, alt, author, user }];
	}),
) as Record<PhotoKey, Photo>;
