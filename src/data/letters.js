/**
 * 10 cartas individuales — una sola carta en 3 partes:
 *   parte 1 (compartida) + personal (única por amiga) + parte 2 (compartida)
 * Links públicos: /?para=daniela-gomez
 * Listar todas: npm run links
 */

import { asset } from '../lib/assets.js';

const SHARED_POSTCARD = {
  frontImage: asset('assets/postcard/postal_front.webp'),
  backImage: asset('assets/postcard/postal_back.webp'),
};

const SHARED_ENVELOPE = {
  closedImage: asset('assets/home/sobre_preview.webp'),
  openImage: asset('assets/envelope/sobre_carta_saliendo.webp'),
  letterImage: asset('assets/envelope/sobre_carta_saliendo.webp'),
};

const SHARED_LETTER_META = {
  paperImage: asset('assets/letter/hoja_carta.webp'),
  signatureImage: asset('assets/letter/firma_artista.webp'),
};

const SHARED_HUG = {
  image: asset('assets/hug/muneco_abrazo_final.webp'),
};

/**
 * PARTE 1 — igual en todas las cartas (antes de lo personal).
 */
const PART_1 = [
  {
    parts: [
      {
        text: 'Han sido cuatro años maravillosos en Monterrey, y me hace muy feliz saber que tú has formado parte de la etapa más bonita de mi vida. Tienes un ',
      },
      {
        text: 'lugar muy especial en mi corazón',
        accent: true,
        accentTone: 'rose',
      },
      {
        text: ', y esta carta es una pequeña manera de expresártelo.',
      },
    ],
  },
  'Quizá ya lo sepas, o quizá no. Mi visa para continuar en México venció y, aun sin trabajo, tuve que regresar a Costa Rica por un tiempo, mientras se abren nuevas puertas que me permitan volver a las bellas tierras regias.',
  {
    parts: [
      {
        text: 'No',
        circled: true,
      },
      { text: ' tomo este momento como ' },
      {
        text: 'una despedida definitiva',
        accent: true,
        accentTone: 'teal',
      },
      {
        text: ', sino como la oportunidad perfecta para cerrar una etapa y dar paso a una nueva, llena de sorpresas y experiencias, con nuevas oportunidades para reencontrarnos y seguir cultivando nuestra amistad.',
      },
    ],
  },
];

/**
 * PARTE PERSONAL — única que cambia por amiga.
 * Completar los corchetes al personalizar cada carta.
 */
const PERSONAL_PLACEHOLDER = [
  'Cuando pienso en ti, una de las primeras cosas que viene a mi mente es [cualidad o forma de ser de la persona]. Siempre he admirado de ti [segunda cualidad], porque [explicación breve de por qué esa cualidad fue importante].',
  'Recuerdo con mucho cariño [momento, anécdota o experiencia específica].',
];

/**
 * PARTE 2 — igual en todas las cartas (después de lo personal).
 */
const PART_2 = [
  'Gracias por cada risa juntos, cada conversación, cada abrazo, cada chiste y consejo. Gracias por ser siempre una increíble persona, llena de luz, bondad y positivismo. Me has llenado de motivación en muchos momentos, y estoy muy feliz por haber tenido el privilegio de compartir momentos cercanos contigo.',
  {
    parts: [
      { text: 'Cada momento juntos los atesoraré siempre. ' },
      {
        text: 'Doy gracias a Dios por tu amistad! Me alegra muchísimo haberte conocido.',
        bold: true,
      },
    ],
  },
  'Si algo he aprendido en los últimos días es lo siguiente:',
  {
    text: 'Muchas veces vivimos pensando en el futuro, planeando y organizándolo todo, pero realmente no tenemos certeza de lo que sucederá mañana. Decirnos que más adelante encontraremos el momento perfecto para agradecerle a una amistad, dar un abrazo, compartir con alguien que queremos, hacer una llamada, reconciliarnos o dar el primer paso en un nuevo proyecto es, muchas veces, un engaño disfrazado de: «Pronto lo haré; ahorita no tengo tiempo».',
    inspire: true,
  },
  {
    text: 'Yo caí en ese error. Pensé que todavía tendría tiempo para agradecerte en persona, crear un nuevo recuerdo contigo o decirte con calma lo especial que eres para mí. Ahora que regresé a casa, entendí que muchas veces esperamos el momento perfecto y, sin darnos cuenta, terminamos aplazando lo que realmente importa.',
    inspire: true,
  },
  {
    text: 'Por eso quiero compartirte algo que también intento aprender: si deseas agradecer, abrazar, llamar, reconciliarte o comenzar algo importante, hazlo hoy. Aunque dé miedo, incomode o parezca que habrá una mejor oportunidad después. No siempre sabemos cuánto tiempo tendremos, y el momento perfecto muchas veces no llega.',
    inspire: true,
  },
  {
    text: 'Vive el hoy. Hazlo hoy. Disfruta el hoy.',
    punchline: true,
  },
  'Así que te pido una disculpa por a veces no haber sabido aprovechar al máximo nuestra amistad.',
  {
    parts: [
      { text: 'También quiero aprovechar esta carta para pedirte perdón, ' },
      {
        text: 'si en algún momento un gesto, una frase, un comentario, una actitud o algún comportamiento mío pudo haberte causado incomodidad o haberte herido',
        italic: true,
      },
      {
        text: '. Nunca fue mi intención, aunque reconozco que a veces no me doy cuenta cuando cometo el error de alejar a las personas que más quiero.',
      },
    ],
  },
  'Perdón también por las veces en las que desaparecí, tardé en responder o pude parecer distante. Nunca fue por falta de cariño ni porque no valorara nuestra amistad. A veces me encierro demasiado en mis cosas y no siempre sé demostrar correctamente lo importante que eres para mí.',
  {
    text: 'Gracias por tu paciencia, por tu comprensión y por haber seguido estando.',
    punchline: true,
  },
  'Doy gracias por tu vida, por nuestra amistad y por todo lo que dejaste en mí durante esta etapa.',
  {
    parts: [
      { text: 'Finalmente, sigue disfrutando la vida al millón y ' },
      { text: 'creando recuerdos inolvidables', accent: true, accentTone: 'coral' },
      {
        text: '. Te voy a querer siempre y que podrás contar con mi cariño y mi apoyo. Que esta carta sea un recordatorio de ello.',
      },
    ],
  },
  'Me quedo expectante y feliz por las muchas historias más que Dios nos regalará a su tiempo.',
  {
    text: 'Te quiero mucho!',
    loveClose: true,
  },
];

function paragraphText(paragraph) {
  if (typeof paragraph === 'string') return paragraph;
  if (paragraph.parts) {
    return paragraph.parts.map((part) => part.text).join('');
  }
  return paragraph.text || '';
}

/**
 * Empaqueta la carta completa (parte 1 + personal + parte 2)
 * en pantallas seguidas y llenas.
 */
const SCREEN_CHAR_BUDGET = 780;
const FIRST_SCREEN_CHAR_BUDGET = 720; // 1.ª pantalla lleva saludo
const LAST_SCREEN_CHAR_BUDGET = 520; // última deja espacio a firma

function packLetterScreens(paragraphs) {
  const pages = [];
  let current = [];
  let used = 0;
  let isFirst = true;

  const flush = () => {
    if (current.length === 0) return;
    pages.push({
      id: `page-${pages.length + 1}`,
      paragraphs: current,
    });
    current = [];
    used = 0;
    isFirst = false;
  };

  for (const paragraph of paragraphs) {
    const budget = isFirst ? FIRST_SCREEN_CHAR_BUDGET : SCREEN_CHAR_BUDGET;
    const len = paragraphText(paragraph).length;
    if (current.length > 0 && used + len > budget) {
      flush();
    }
    current.push(paragraph);
    used += len;
  }

  flush();

  // Si la última pantalla está muy llena, separa el cierre para la firma
  const last = pages[pages.length - 1];
  if (last) {
    const lastChars = last.paragraphs.reduce(
      (n, p) => n + paragraphText(p).length,
      0,
    );
    if (last.paragraphs.length > 2 && lastChars > LAST_SCREEN_CHAR_BUDGET) {
      const tail = last.paragraphs.splice(-2, 2);
      pages.push({
        id: `page-${pages.length + 1}`,
        paragraphs: tail,
      });
    }
  }

  return pages;
}

/** Carta = parte 1 + personal + parte 2, seguida en pantallas. */
function buildLetterPages(personal) {
  return packLetterScreens([...PART_1, ...personal, ...PART_2]);
}

/** Convierte un nombre en slug de URL: "Daniela Gómez" → "daniela-gomez" */
export function slugifyName(text) {
  return String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createFriend({ id, name, envelopeName, greeting, personal }) {
  const displayName = envelopeName || name;
  const slug = slugifyName(displayName);

  return {
    id,
    slug,
    name,
    envelopeName: displayName,
    greeting,
    postcard: { ...SHARED_POSTCARD },
    envelope: { ...SHARED_ENVELOPE },
    letter: {
      ...SHARED_LETTER_META,
      pages: buildLetterPages(personal),
      closing: 'Con cariño,',
      signedName: 'Emma.',
    },
    hug: { ...SHARED_HUG },
  };
}

export const letters = {
  amistad01: createFriend({
    id: 'amistad01',
    name: 'Daniela Gómez',
    envelopeName: 'Daniela Gómez',
    greeting: 'Querida Daniela,',
    personal: [...PERSONAL_PLACEHOLDER],
  }),
  amistad02: createFriend({
    id: 'amistad02',
    name: 'Ximena',
    envelopeName: 'Ximena',
    greeting: 'Querida Ximena,',
    personal: [
      'Ximeninha! Siempre he admirado tu esencia y tu originalidad, porque te hacen resaltar en cualquier lugar sin siquiera intentarlo. Me encanta la energía y la actitud que pones en todo lo que haces.',
      'Recuerdo con mucho cariño cada uno de nuestros abrazos, nuestros comentarios súper funables y los bailes brasileños. Valoro muchísimo la sencillez y la naturalidad de cada una de nuestras interacciones, siempre tan genuinas y sinceras.',
    ],
  }),
  amistad03: createFriend({
    id: 'amistad03',
    name: 'Camila Torres',
    envelopeName: 'Camila Torres',
    greeting: 'Querida Camila,',
    personal: [...PERSONAL_PLACEHOLDER],
  }),
  amistad04: createFriend({
    id: 'amistad04',
    name: 'Fernanda',
    envelopeName: 'Fernanda',
    greeting: 'Querida Fernanda,',
    personal: [...PERSONAL_PLACEHOLDER],
  }),
  amistad05: createFriend({
    id: 'amistad05',
    name: 'Isabella Ruiz',
    envelopeName: 'Isabella Ruiz',
    greeting: 'Querida Isabella,',
    personal: [...PERSONAL_PLACEHOLDER],
  }),
  amistad06: createFriend({
    id: 'amistad06',
    name: 'María José',
    envelopeName: 'María José',
    greeting: 'Querida María José,',
    personal: [...PERSONAL_PLACEHOLDER],
  }),
  amistad07: createFriend({
    id: 'amistad07',
    name: 'Alejandra',
    envelopeName: 'Alejandra',
    greeting: 'Querida Alejandra,',
    personal: [...PERSONAL_PLACEHOLDER],
  }),
  amistad08: createFriend({
    id: 'amistad08',
    name: 'Constanza Morales',
    envelopeName: 'Constanza Morales',
    greeting: 'Querida Constanza,',
    personal: [...PERSONAL_PLACEHOLDER],
  }),
  amistad09: createFriend({
    id: 'amistad09',
    name: 'Guadalupe Santiago',
    envelopeName: 'Guadalupe Santiago',
    greeting: 'Querida Guadalupe,',
    personal: [...PERSONAL_PLACEHOLDER],
  }),
  amistad10: createFriend({
    id: 'amistad10',
    name: 'Beatriz',
    envelopeName: 'Beatriz',
    greeting: 'Querida Beatriz,',
    personal: [...PERSONAL_PLACEHOLDER],
  }),
};

export const currentLetter = letters.amistad01;

const DEFAULT_PUBLIC_ORIGIN = 'https://carta-digital-ashy.vercel.app';

/** Link relativo al sitio: /?para=daniela-gomez */
export function getSharePath(letter) {
  return `/?para=${letter.slug}`;
}

/** URL absoluta para compartir (WhatsApp, etc.). */
export function getShareUrl(letter, baseUrl = DEFAULT_PUBLIC_ORIGIN) {
  const origin = String(baseUrl || DEFAULT_PUBLIC_ORIGIN).replace(/\/$/, '');
  return `${origin}/?para=${letter.slug}`;
}

/** Lista las 10 cartas con slug + URL pública (para `npm run links`). */
export function listShareLinks(baseUrl = DEFAULT_PUBLIC_ORIGIN) {
  return Object.values(letters).map((letter) => ({
    id: letter.id,
    name: letter.name,
    slug: letter.slug,
    path: getSharePath(letter),
    url: getShareUrl(letter, baseUrl),
  }));
}

/**
 * Resuelve por nombre (slug), id interno amistad01…10, o nombre completo.
 * Sin param → primera carta.
 * Param inválido → null.
 */
export function getLetterByRecipient(recipientId) {
  if (!recipientId) {
    return letters.amistad01;
  }

  if (letters[recipientId]) {
    return letters[recipientId];
  }

  const key = slugifyName(recipientId);

  return (
    Object.values(letters).find(
      (letter) =>
        letter.slug === key ||
        slugifyName(letter.name) === key ||
        slugifyName(letter.envelopeName || '') === key ||
        slugifyName(String(letter.name).split(/\s+/)[0] || '') === key,
    ) || null
  );
}
