/**
 * Cartas de amistad (+ especiales) — diseño compartido PART_1 + PART_2.
 *
 * ─── AMISTAD (amistad01…20) ──────────────────────────────────────
 * Opción A — genérica:
 *   createFriend({ id: 'amistad11', name: 'Carlos', gender: 'male' })
 * Opción B — personalizada:
 *   createFriend({ id, name, greeting, personal: ['¡Nombre! …', '…'] })
 * Opción C — plural (pareja):
 *   createFriend({ id, name, greeting, plural: true, personal: […] })
 *
 * ─── ESPECIALES (más variación / experiencia más personal) ───────
 *   createFriend({
 *     id: 'especial-nayeli',
 *     name: 'Nayeli',
 *     special: true,
 *     specialVariant: 'deep',  // 'deep' | 'mentor'
 *     personal: [ '...', '...', '...', '...' ],  // 3 o 4 párrafos
 *   })
 *
 * Links: npm run links
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
  'Quizá ya lo sepas, o quizá no. Mi visa para continuar en México venció y, aún sin trabajo, regresé a Costa Rica por un tiempo, mientras se abren nuevas puertas que me permitan volver a las bellas tierras regias.',
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
 * Nombre corto para saludo y apertura del personal.
 * "Constanza Morales" → "Constanza"
 */
export function firstName(name) {
  return String(name || '')
    .trim()
    .split(/\s+/)[0];
}

/**
 * Parte personal genérica — amigo (singular).
 * El nombre aparece al inicio del texto.
 */
export function personalGenericMale(name) {
  const n = firstName(name);
  return [
    `¡${n}! Siempre he valorado mucho tu amistad. Agradezco tu compañía, tus conversaciones y la forma tan genuina en que has estado presente en esta etapa de mi vida.`,
    `Admiro tu corazón, tu carácter y todo lo que aportas a quienes te rodean. Gracias por ser un gran amigo. Deseo que Dios siga guiando tus pasos y que podamos seguir compartiendo muchos momentos más.`,
  ];
}

/**
 * Parte personal genérica — amiga (singular).
 * El nombre aparece al inicio del texto.
 */
export function personalGenericFemale(name) {
  const n = firstName(name);
  return [
    `¡${n}! Siempre he valorado mucho tu amistad. Agradezco tu compañía, tus conversaciones y la forma tan genuina en que has estado presente en esta etapa de mi vida.`,
    `Admiro tu corazón, tu carácter y todo lo que aportas a quienes te rodean. Gracias por ser una gran amiga. Deseo que Dios siga guiando tus pasos y que podamos seguir compartiendo muchos momentos más.`,
  ];
}

/** Plantilla vacía (corchetes) — preferir gender o personal propio. */
const PERSONAL_TODO = [
  'Cuando pienso en ti, una de las primeras cosas que viene a mi mente es [cualidad o forma de ser]. Siempre he admirado de ti [segunda cualidad], porque [por qué importa].',
  'Recuerdo con mucho cariño [momento, anécdota o experiencia específica].',
];

/**
 * Plantilla ampliada para experiencias especiales (más personalización).
 * Completar los 3–4 párrafos; el diseño de acentos de PART_1/2 se mantiene.
 */
const PERSONAL_SPECIAL_TODO = [
  '[Nombre]! [Qué significa esta persona para ti / cómo llegó a tu vida].',
  '[Cualidades que admiras, con más detalle y ejemplos concretos].',
  '[Anécdotas o momentos que solo ustedes comparten].',
  '[Deseo, agradecimiento o bendición personal antes del cierre compartido].',
];

/**
 * PARTE 2 — igual en todas las cartas (después de lo personal).
 */
const PART_2 = [
  {
    parts: [
      {
        text: 'Gracias por',
        accent: true,
        accentTone: 'amber',
      },
      {
        text: ' cada risa juntos, cada conversación, cada abrazo, cada chiste y consejo. Gracias por ser siempre una increíble persona, llena de luz, bondad y positivismo. Me has llenado de motivación en muchos momentos, y estoy muy feliz por haber tenido el privilegio de compartir momentos cercanos contigo.',
      },
    ],
  },
  {
    parts: [
      {
        text: 'Doy gracias a Dios por tu amistad!',
        bold: true,
      },
    ],
  },
  'Si algo he aprendido en los últimos días es lo siguiente:',
  {
    text: 'Muchas veces vivimos pensando en el futuro, planeando y organizándolo todo, pero realmente no tenemos certeza de lo que sucederá mañana.',
    inspire: true,
  },
  {
    text: 'Decirnos que más adelante encontraremos el momento perfecto para agradecerle a una amistad, dar un abrazo, compartir con alguien que queremos, hacer una llamada, reconciliarnos o dar el primer paso en un nuevo proyecto es, muchas veces, un engaño disfrazado de: «Pronto lo haré; ahorita no tengo tiempo».',
    inspire: true,
  },
  {
    text: 'Yo caí en ese error. Pensé que todavía tendría tiempo para agradecerte en persona, crear un nuevo recuerdo contigo y decirte lo especial que eres para mí.',
    inspire: true,
  },
  {
    text: 'Ahora que regresé a casa, entendí que muchas veces esperamos el momento perfecto y, sin darnos cuenta, terminamos aplazando lo que realmente importa.',
    inspire: true,
  },
  {
    text: 'Por eso quiero compartirte algo que también intento aprender: hazlo hoy. Aunque dé miedo, incomode o parezca que habrá una mejor oportunidad después. No siempre sabemos cuánto tiempo tendremos. El momento perfecto es ahora.',
    inspire: true,
  },
  {
    text: 'Vive el hoy.\nHazlo hoy.\nDisfruta el hoy.',
    punchline: true,
  },
  'Así que te pido una disculpa por a veces no haber sabido aprovechar al máximo nuestra amistad.',
  {
    parts: [
      { text: 'Perdón ' },
      {
        text: 'si en algún momento un gesto, una frase, un comentario, una actitud o algún comportamiento mío pudo haberte causado incomodidad o haberte herido',
        italic: true,
      },
      {
        text: '.',
      },
    ],
  },
  {
    parts: [
      { text: 'Perdón ' },
      {
        text: 'por las veces en las que desaparecí, tardé en responder o pude parecer distante',
        italic: true,
      },
      {
        text: '. Nunca fue por falta de cariño ni porque no valorara nuestra amistad. A veces me encierro demasiado en mis cosas y no siempre sé demostrar correctamente lo importante que eres para mí.',
      },
    ],
  },
  {
    text: 'Gracias por tu paciencia, por tu comprensión y por haber seguido estando ahí.',
    punchline: true,
  },
  'Doy gracias por tu vida, por nuestra amistad y por todo lo que dejaste en mí durante esta etapa.',
  {
    parts: [
      { text: 'Finalmente, sigue disfrutando la vida al millón y ' },
      { text: 'creando recuerdos inolvidables', accent: true, accentTone: 'coral' },
      {
        text: '. Siempre podrás contar con mi cariño y mi apoyo.',
      },
    ],
  },
  'Que esta carta sea un recordatorio de ello.',
  'Me quedo expectante y feliz por las muchas historias más que Dios nos regalará a su tiempo.',
  {
    text: 'Te quiero mucho!',
    loveClose: true,
  },
];

/**
 * Variantes en plural (ustedes) — mismo diseño/acentos, otra conjugación.
 * Usar con createFriend({ plural: true }) p. ej. Rocha y Ashly.
 */
const PART_1_PLURAL = [
  {
    parts: [
      {
        text: 'Han sido cuatro años maravillosos en Monterrey, y me hace muy feliz saber que ustedes han formado parte de la etapa más bonita de mi vida. Tienen un ',
      },
      {
        text: 'lugar muy especial en mi corazón',
        accent: true,
        accentTone: 'rose',
      },
      {
        text: ', y esta carta es una pequeña manera de expresárselo.',
      },
    ],
  },
  'Quizá ya lo sepan, o quizá no. Mi visa para continuar en México venció y, aún sin trabajo, regresé a Costa Rica por un tiempo, mientras se abren nuevas puertas que me permitan volver a las bellas tierras regias.',
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

const PART_2_PLURAL = [
  {
    parts: [
      {
        text: 'Gracias por',
        accent: true,
        accentTone: 'amber',
      },
      {
        text: ' cada risa juntos, cada conversación, cada abrazo, cada chiste y consejo. Gracias por ser siempre increíbles personas, llenas de luz, bondad y positividad. Me han llenado de motivación en muchos momentos, y estoy muy feliz por haber tenido el privilegio de compartir momentos cercanos con ustedes.',
      },
    ],
  },
  {
    parts: [
      {
        text: '¡Doy gracias a Dios por su amistad!',
        bold: true,
      },
    ],
  },
  'Si algo he aprendido en los últimos días es lo siguiente:',
  {
    text: 'Muchas veces vivimos pensando en el futuro, planeando y organizándolo todo, pero realmente no tenemos certeza de lo que sucederá mañana.',
    inspire: true,
  },
  {
    text: 'Decirnos que más adelante encontraremos el momento perfecto para agradecerle a una amistad, dar un abrazo, compartir con alguien que queremos, hacer una llamada, reconciliarnos o dar el primer paso en un nuevo proyecto es, muchas veces, un engaño disfrazado de: «Pronto lo haré; ahorita no tengo tiempo».',
    inspire: true,
  },
  {
    text: 'Yo caí en ese error. Pensé que todavía tendría tiempo para agradecerles en persona, crear un nuevo recuerdo con ustedes y decirles lo especiales que son para mí.',
    inspire: true,
  },
  {
    text: 'Ahora que regresé a casa, entendí que muchas veces esperamos el momento perfecto y, sin darnos cuenta, terminamos aplazando lo que realmente importa.',
    inspire: true,
  },
  {
    text: 'Por eso quiero compartirles algo que también intento aprender: háganlo hoy. Aunque dé miedo, incomode o parezca que habrá una mejor oportunidad después. No siempre sabemos cuánto tiempo tendremos. El momento perfecto es ahora.',
    inspire: true,
  },
  {
    text: 'Vivan el hoy.\nHáganlo hoy.\nDisfruten el hoy.',
    punchline: true,
  },
  'Así que les pido una disculpa por a veces no haber sabido aprovechar al máximo nuestra amistad.',
  {
    parts: [
      { text: 'Perdón ' },
      {
        text: 'si en algún momento un gesto, una frase, un comentario, una actitud o algún comportamiento mío pudo haberles causado incomodidad o haberles herido',
        italic: true,
      },
      {
        text: '.',
      },
    ],
  },
  {
    parts: [
      { text: 'Perdón ' },
      {
        text: 'por las veces en las que desaparecí, tardé en responder o pude parecer distante',
        italic: true,
      },
      {
        text: '. Nunca fue por falta de cariño ni porque no valorara nuestra amistad. A veces me encierro demasiado en mis cosas y no siempre sé demostrar correctamente lo importantes que son para mí.',
      },
    ],
  },
  {
    text: 'Gracias por su paciencia, por su comprensión y por haber seguido estando ahí.',
    punchline: true,
  },
  'Doy gracias por sus vidas, por nuestra amistad y por todo lo que dejaron en mí durante esta etapa.',
  {
    parts: [
      { text: 'Finalmente, sigan disfrutando la vida al millón y ' },
      { text: 'creando recuerdos inolvidables', accent: true, accentTone: 'coral' },
      {
        text: '. Siempre podrán contar con mi cariño y mi apoyo.',
      },
    ],
  },
  'Que esta carta sea un recordatorio de ello.',
  'Me quedo expectante y feliz por las muchas historias más que Dios nos regalará a su tiempo.',
  {
    text: '¡Los quiero mucho!',
    loveClose: true,
  },
];

/**
 * Variante “deep” — apertura un poco más íntima (experiencias especiales).
 */
const PART_1_DEEP = [
  {
    parts: [
      {
        text: 'Hay personas que marcan una etapa de forma tan especial que uno no puede dejar de agradecerles. En Monterrey, tú has sido una de ellas: tienes un ',
      },
      {
        text: 'lugar muy especial en mi corazón',
        accent: true,
        accentTone: 'rose',
      },
      {
        text: ', y esta carta es una pequeña manera de expresártelo con más calma y detalle.',
      },
    ],
  },
  'Quizá ya lo sepas, o quizá no. Mi visa para continuar en México venció y, aún sin trabajo, regresé a Costa Rica por un tiempo, mientras se abren nuevas puertas que me permitan volver a las bellas tierras regias.',
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
 * Variante “mentor” — apertura con gratitud por guía y acompañamiento.
 */
const PART_1_MENTOR = [
  {
    parts: [
      {
        text: 'Han sido cuatro años de mucho aprendizaje en Monterrey, y me hace muy feliz saber que tú has acompañado y guiado parte de este camino. Tienes un ',
      },
      {
        text: 'lugar muy especial en mi corazón',
        accent: true,
        accentTone: 'rose',
      },
      {
        text: ', y esta carta es una pequeña manera de expresarte mi gratitud.',
      },
    ],
  },
  'Quizá ya lo sepas, o quizá no. Mi visa para continuar en México venció y, aún sin trabajo, regresé a Costa Rica por un tiempo, mientras se abren nuevas puertas que me permitan volver a las bellas tierras regias.',
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
        text: ', sino como la oportunidad perfecta para cerrar una etapa y dar paso a una nueva, llena de sorpresas y experiencias, con nuevas oportunidades para reencontrarnos y seguir cultivando lo que juntos sembramos.',
      },
    ],
  },
];

function personalSpecialTodo(name) {
  const n = firstName(name);
  return [
    `${n}! [Qué significa esta persona para ti / cómo llegó a tu vida].`,
    '[Cualidades que admiras, con más detalle y ejemplos concretos].',
    '[Anécdotas o momentos que solo ustedes comparten].',
    '[Deseo, agradecimiento o bendición personal antes del cierre compartido].',
  ];
}

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
const LAST_SCREEN_CHAR_BUDGET = 480; // última deja espacio a firma
const MIN_SCREEN_FILL = 600; // evita pantallas a medias (p. ej. personal largo)
const SOFT_SCREEN_BUDGET = SCREEN_CHAR_BUDGET + 100; // margen al reequilibrar (personales largos)

function pageCharCount(page) {
  return page.paragraphs.reduce((n, p) => n + paragraphText(p).length, 0);
}

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

  // Reequilibra pantallas cortas jalando párrafos de la siguiente
  for (let i = 0; i < pages.length - 1; i += 1) {
    let filled = pageCharCount(pages[i]);
    while (filled < MIN_SCREEN_FILL && pages[i + 1]?.paragraphs.length) {
      const softBudget = i === 0 ? FIRST_SCREEN_CHAR_BUDGET : SOFT_SCREEN_BUDGET;
      const nextPar = pages[i + 1].paragraphs[0];
      const len = paragraphText(nextPar).length;
      if (filled + len > softBudget) break;
      // No vaciar el cierre con firma
      if (i + 1 === pages.length - 1 && pages[i + 1].paragraphs.length <= 2) {
        break;
      }
      pages[i].paragraphs.push(pages[i + 1].paragraphs.shift());
      filled += len;
      if (pages[i + 1].paragraphs.length === 0) {
        pages.splice(i + 1, 1);
      }
    }
  }

  // Si una pantalla intermedia quedó pasada de peso, empuja párrafos a la siguiente
  for (let i = 0; i < pages.length - 1; i += 1) {
    const softBudget = i === 0 ? FIRST_SCREEN_CHAR_BUDGET : SOFT_SCREEN_BUDGET;
    while (
      pageCharCount(pages[i]) > softBudget &&
      pages[i].paragraphs.length > 2
    ) {
      const moved = pages[i].paragraphs.pop();
      pages[i + 1].paragraphs.unshift(moved);
    }
  }

  // Si la última pantalla está muy llena, separa el cierre para la firma
  let last = pages[pages.length - 1];
  if (last) {
    const lastChars = pageCharCount(last);
    if (last.paragraphs.length > 2 && lastChars > LAST_SCREEN_CHAR_BUDGET) {
      const take =
        lastChars > 650 || last.paragraphs.length > 4
          ? Math.min(3, last.paragraphs.length - 1)
          : 2;
      const tail = last.paragraphs.splice(-take, take);
      pages.push({
        id: `page-${pages.length + 1}`,
        paragraphs: tail,
      });
    }
  }

  // Si la penúltima quedó pesada y el cierre aún cabe un poco, pasa párrafos
  if (pages.length >= 2) {
    const prev = pages[pages.length - 2];
    last = pages[pages.length - 1];
    while (
      pageCharCount(prev) > SOFT_SCREEN_BUDGET &&
      prev.paragraphs.length > 2 &&
      pageCharCount(last) < 420
    ) {
      last.paragraphs.unshift(prev.paragraphs.pop());
    }
  }

  // Renumerar ids tras reequilibrar
  pages.forEach((page, index) => {
    page.id = `page-${index + 1}`;
  });

  return pages;
}

function cloneParagraph(paragraph) {
  if (typeof paragraph === 'string') return paragraph;
  if (paragraph.parts) {
    return {
      ...paragraph,
      parts: paragraph.parts.map((part) => ({ ...part })),
    };
  }
  return { ...paragraph };
}

/** Carta = parte 1 + personal + parte 2 (mismo diseño base). */
function buildLetterPages(
  personal,
  { plural = false, specialVariant = null } = {},
) {
  let part1 = PART_1;
  let part2 = PART_2;
  if (plural) {
    part1 = PART_1_PLURAL;
    part2 = PART_2_PLURAL;
  } else if (specialVariant === 'mentor') {
    part1 = PART_1_MENTOR;
  } else if (specialVariant === 'deep') {
    part1 = PART_1_DEEP;
  }
  return packLetterScreens([
    ...part1.map(cloneParagraph),
    ...personal.map(cloneParagraph),
    ...part2.map(cloneParagraph),
  ]);
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

/**
 * createFriend({
 *   id, name,
 *   gender: 'male' | 'female',
 *   personal: ['…'],
 *   plural: true,
 *   special: true,
 *   specialVariant: 'deep' | 'mentor',
 * })
 */
function createFriend({
  id,
  name,
  envelopeName,
  greeting,
  personal,
  gender,
  plural = false,
  special = false,
  specialVariant = null,
}) {
  const displayName = envelopeName || name;
  const shortName = firstName(displayName);
  const variant = specialVariant || (special ? 'deep' : null);

  const resolvedGreeting =
    greeting ||
    (gender === 'male'
      ? `Querido ${shortName},`
      : gender === 'female'
        ? `Querida ${shortName},`
        : `Querida ${shortName},`);

  const specialPlaceholder = personalSpecialTodo(shortName);
  const resolvedPersonal =
    personal ||
    (special || variant
      ? specialPlaceholder
      : gender === 'male'
        ? personalGenericMale(shortName)
        : gender === 'female'
          ? personalGenericFemale(shortName)
          : PERSONAL_TODO);

  const slug = slugifyName(displayName);
  const personalReady =
    JSON.stringify(resolvedPersonal) !== JSON.stringify(PERSONAL_TODO) &&
    JSON.stringify(resolvedPersonal) !== JSON.stringify(specialPlaceholder) &&
    JSON.stringify(resolvedPersonal) !==
      JSON.stringify(PERSONAL_SPECIAL_TODO);

  return {
    id,
    slug,
    name,
    envelopeName: displayName,
    greeting: resolvedGreeting,
    gender: gender || null,
    personalReady,
    plural,
    special: Boolean(special || variant),
    specialVariant: variant,
    postcard: { ...SHARED_POSTCARD },
    envelope: { ...SHARED_ENVELOPE },
    letter: {
      ...SHARED_LETTER_META,
      pages: buildLetterPages(resolvedPersonal, {
        plural,
        specialVariant: variant,
      }),
      closing: 'Con cariño,',
      signedName: 'Emma.',
    },
    hug: { ...SHARED_HUG },
  };
}

/**
 * Catálogo de amistades.
 * Para cada una: edita SOLO name / envelopeName / greeting / personal.
 */
export const letters = {
  amistad01: createFriend({
    id: 'amistad01',
    name: 'Daniela Gómez',
    envelopeName: 'Daniela Gómez',
    greeting: 'Querida Daniela,',
    personal: PERSONAL_TODO,
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
    name: 'Rubí',
    envelopeName: 'Rubí',
    greeting: 'Querida Rubí,',
    personal: [
      'Rubí! Me encanta tu disposición, tus gestos llenos de amor hacia los demás, la delicadeza que tienes y tu atención a los detalles.',
      'Recuerdo con mucho cariño nuestros momentos delulu, nuestros chistes locos y ese gusto que compartimos por salir a correr, especialmente por tu deseo de convertir el ejercicio en una manera de honrar a Dios. Admiro tu dedicación y la forma en que eres una amiga ejemplar, llena de la bondad de Dios. Agradezco muchísimo aquel reto de oración que nos permitió conocernos mejor. Eres una chica genial!',
    ],
  }),
  amistad04: createFriend({
    id: 'amistad04',
    name: 'Rocha y Ashly',
    envelopeName: 'Rocha y Ashly',
    greeting: 'Queridos Rocha y Ashly,',
    plural: true,
    personal: [
      'Rocha y Ashly! Siempre he disfrutado mucho cada conversación con ustedes, cada una tan particular y acorde con nuestras personalidades, pero siempre valiosa y llena de aprendizajes. Me encantó poder verlos liderar a jóvenes tan diferentes y únicos, con el único objetivo de guiarlos a poner su mirada en Cristo.',
      'He aprendido muchísimo sobre liderazgo a través de su ejemplo, y espero seguir aprendiendo de ustedes. Aprecio cada abrazo al saludarnos y cada recibimiento tan cálido y alegre. Aun siendo yo más tímido y reservado, siempre me han hecho sentir en confianza.',
    ],
  }),
  amistad05: createFriend({
    id: 'amistad05',
    name: 'Samuel',
    envelopeName: 'Samuel',
    greeting: 'Querido Samuel,',
    personal: [
      'Samuel! Fuiste uno de mis primeros amigos en la iglesia, y siempre recordaré con mucho cariño la calidez y apertura con las que me recibiste, por siempre saludarme con un gran abrazo y una sonrisa de oreja a oreja.',
      'Admiro mucho tu vocación, tu sabiduría y firmeza. Eres un ejemplo a seguir y deseo continuar viéndote crecer y alcanzar todo lo que Dios tiene preparado para ti. ¡Eres un gran hombre!',
    ],
  }),
  amistad06: createFriend({
    id: 'amistad06',
    name: 'Daniel',
    envelopeName: 'Daniel',
    greeting: 'Querido Daniel,',
    personal: [
      'Daniel! Fuiste quien me recibió la primera vez que fui a la iglesia, y siempre recordaré tu cariño y tu amor constante, así como cada salida a correr y cada conversación llena de todo tipo de matices.',
      'Admiro mucho tu creatividad y el esfuerzo que pones para hacer realidad tus sueños. Siempre disfruto compartir contigo, ya sea en un parque, en un depa jugando Lego, en una reta de básquet, en el estadio viendo ganar a las Chivas o en una carrera nocturna a NS.',
    ],
  }),
  // Slots libres — cuando necesites genérica:
  // createFriend({ id: 'amistad07', name: 'Nombre', gender: 'male' })
  // createFriend({ id: 'amistad07', name: 'Nombre', gender: 'female' })
  amistad07: createFriend({
    id: 'amistad07',
    name: 'Aaron',
    envelopeName: 'Aaron',
    greeting: 'Querido Aaron,',
    personal: [
      'Aaron! Eres un gran amigo y siempre me la paso súper bien contigo. Tienes una vibra tranquila y relajante, y al mismo tiempo eres muy divertido. Siempre recuerdo con cariño cada vez que te he ido a visitar a tu depa, tu enorme hospitalidad y tu disposición para servir. Cada conversación contigo es única, desde hablar en portugués, pasar por el inglés y terminar en temas más serios. Admiro mucho tu esfuerzo y el empeño que pones en todo lo que haces.',
    ],
  }),
  amistad08: createFriend({
    id: 'amistad08',
    name: 'Constanza Morales',
    envelopeName: 'Constanza Morales',
    greeting: 'Querida Constanza,',
    personal: PERSONAL_TODO,
  }),
  amistad09: createFriend({
    id: 'amistad09',
    name: 'Guadalupe Santiago',
    envelopeName: 'Guadalupe Santiago',
    greeting: 'Querida Guadalupe,',
    personal: PERSONAL_TODO,
  }),
  amistad10: createFriend({
    id: 'amistad10',
    name: 'Beatriz',
    envelopeName: 'Beatriz',
    greeting: 'Querida Beatriz,',
    personal: PERSONAL_TODO,
  }),

  // ── 10 slots adicionales de amistad (pendientes) ──
  amistad11: createFriend({
    id: 'amistad11',
    name: 'Amistad 11',
    personal: PERSONAL_TODO,
  }),
  amistad12: createFriend({
    id: 'amistad12',
    name: 'Amistad 12',
    personal: PERSONAL_TODO,
  }),
  amistad13: createFriend({
    id: 'amistad13',
    name: 'Amistad 13',
    personal: PERSONAL_TODO,
  }),
  amistad14: createFriend({
    id: 'amistad14',
    name: 'Amistad 14',
    personal: PERSONAL_TODO,
  }),
  amistad15: createFriend({
    id: 'amistad15',
    name: 'Amistad 15',
    personal: PERSONAL_TODO,
  }),
  amistad16: createFriend({
    id: 'amistad16',
    name: 'Amistad 16',
    personal: PERSONAL_TODO,
  }),
  amistad17: createFriend({
    id: 'amistad17',
    name: 'Amistad 17',
    personal: PERSONAL_TODO,
  }),
  amistad18: createFriend({
    id: 'amistad18',
    name: 'Amistad 18',
    personal: PERSONAL_TODO,
  }),
  amistad19: createFriend({
    id: 'amistad19',
    name: 'Amistad 19',
    personal: PERSONAL_TODO,
  }),
  amistad20: createFriend({
    id: 'amistad20',
    name: 'Amistad 20',
    personal: PERSONAL_TODO,
  }),

  // ── Experiencias especiales (más variación de marco + personal largo) ──
  // Completar `personal` con 3–4 párrafos propios cuando tengas el texto.
  'especial-nayeli': createFriend({
    id: 'especial-nayeli',
    name: 'Nayeli',
    envelopeName: 'Nayeli',
    greeting: 'Querida Nayeli,',
    gender: 'female',
    special: true,
    specialVariant: 'deep',
  }),
  'especial-ale-naranjo': createFriend({
    id: 'especial-ale-naranjo',
    name: 'Ale Naranjo',
    envelopeName: 'Ale Naranjo',
    greeting: 'Querido Ale,',
    gender: 'male',
    special: true,
    specialVariant: 'deep',
  }),
  'especial-mentora': createFriend({
    id: 'especial-mentora',
    name: 'Mentora',
    envelopeName: 'Mentora',
    greeting: 'Querida Mentora,',
    gender: 'female',
    special: true,
    specialVariant: 'mentor',
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

/** Lista cartas con slug + URL pública (para `npm run links`). */
export function listShareLinks(baseUrl = DEFAULT_PUBLIC_ORIGIN) {
  return Object.values(letters).map((letter) => ({
    id: letter.id,
    name: letter.name,
    slug: letter.slug,
    gender: letter.gender,
    special: letter.special,
    specialVariant: letter.specialVariant,
    personalReady: letter.personalReady,
    path: getSharePath(letter),
    url: getShareUrl(letter, baseUrl),
  }));
}

/**
 * Resuelve por nombre (slug), id interno amistad01…20 / especial-*, o nombre.
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
