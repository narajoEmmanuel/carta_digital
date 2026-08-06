/**
 * 10 cartas individuales — misma app, mismos assets, textos personalizables.
 * Links públicos: ?para=daniela-gomez  (nombre, no amistad01)
 * Los ids internos amistad01…amistad10 siguen funcionando.
 */

const SHARED_POSTCARD = {
  frontImage: '/assets/postcard/postal_front.png',
  backImage: '/assets/postcard/postal_back.png',
};

const SHARED_ENVELOPE = {
  closedImage: '/assets/home/sobre_preview.png',
  openImage: '/assets/envelope/sobre_abierto.png',
  letterImage: '/assets/envelope/sobre_carta_saliendo.png',
};

const SHARED_LETTER_META = {
  paperImage: '/assets/letter/hoja_carta.png',
  signatureImage: '/assets/letter/firma_artista.png',
};

const SHARED_HUG = {
  image: '/assets/hug/muneco_abrazo_final.png',
};

const GRATITUD = [
  'Durante estos cuatro años llenos de experiencias, aprendizajes y momentos que siempre llevaré conmigo, me alegra muchísimo que la vida me haya permitido conocerte.',
  'Dentro de esta etapa en México, tu presencia hizo que muchos momentos fueran más especiales y significativos para mí.',
];

const PERDON = [
  'También quiero pedirte perdón si en algún momento una expresión, una cara, un comentario, un gesto o incluso un silencio mío pudo haberte herido.',
  'Perdón también por las veces en las que pude desaparecerme o parecer distante. Nunca fue con esa intención. A veces me encierro en mis cosas y no siempre sé demostrar correctamente el cariño que siento por las personas.',
];

const CIERRE = [
  'Gracias por tu vida, por tu amistad y por haber formado parte de esta etapa tan importante para mí.',
  'Me llevo con mucho cariño todo lo que compartimos y espero que la vida vuelva a permitirnos coincidir muchas veces más.',
];

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
    ...(envelopeName ? { envelopeName } : {}),
    greeting,
    postcard: { ...SHARED_POSTCARD },
    envelope: { ...SHARED_ENVELOPE },
    letter: {
      ...SHARED_LETTER_META,
      pages: [
        {
          id: 'gratitud',
          paragraphs: [...GRATITUD],
        },
        {
          id: 'personal',
          paragraphs: [...personal],
        },
        {
          id: 'perdon',
          paragraphs: [...PERDON],
        },
        {
          id: 'cierre',
          paragraphs: [...CIERRE],
        },
      ],
      closing: 'Con cariño,',
    },
    hug: { ...SHARED_HUG },
  };
}

export const letters = {
  amistad01: createFriend({
    id: 'amistad01',
    name: 'Daniela Gómez',
    envelopeName: 'Daniela Gómez',
    greeting: 'Querida Daniela:',
    personal: [
      'Gracias por tu vida, por tu amistad y por haber formado parte de esta etapa tan importante para mí.',
      'Me llevo con mucho cariño todo lo que compartimos y espero que la vida vuelva a permitirnos coincidir muchas veces más.',
    ],
  }),
  amistad02: createFriend({
    id: 'amistad02',
    name: 'Ana',
    greeting: 'Querida Ana:',
    personal: [
      '[Escribe aquí cómo conociste a esta persona.]',
      '[Escribe aquí un recuerdo, una cualidad o algo que agradeces específicamente de esta persona.]',
    ],
  }),
  amistad03: createFriend({
    id: 'amistad03',
    name: 'Camila Torres',
    envelopeName: 'Camila',
    greeting: 'Querida Camila:',
    personal: [
      '[Cómo se conocieron.]',
      '[Recuerdo, cualidad o agradecimiento personal.]',
    ],
  }),
  amistad04: createFriend({
    id: 'amistad04',
    name: 'Fernanda',
    greeting: 'Querida Fernanda:',
    personal: [
      '[Cómo se conocieron.]',
      '[Recuerdo, cualidad o agradecimiento personal.]',
    ],
  }),
  amistad05: createFriend({
    id: 'amistad05',
    name: 'Isabella Ruiz',
    envelopeName: 'Isabella',
    greeting: 'Querida Isabella:',
    personal: [
      '[Cómo se conocieron.]',
      '[Recuerdo, cualidad o agradecimiento personal.]',
    ],
  }),
  amistad06: createFriend({
    id: 'amistad06',
    name: 'María José',
    greeting: 'Querida María José:',
    personal: [
      '[Cómo se conocieron.]',
      '[Recuerdo, cualidad o agradecimiento personal.]',
    ],
  }),
  amistad07: createFriend({
    id: 'amistad07',
    name: 'Alejandra',
    greeting: 'Querida Alejandra:',
    personal: [
      '[Cómo se conocieron.]',
      '[Recuerdo, cualidad o agradecimiento personal.]',
    ],
  }),
  amistad08: createFriend({
    id: 'amistad08',
    name: 'Constanza Morales',
    envelopeName: 'Constanza Morales',
    greeting: 'Querida Constanza:',
    personal: [
      '[Cómo se conocieron.]',
      '[Recuerdo, cualidad o agradecimiento personal.]',
    ],
  }),
  amistad09: createFriend({
    id: 'amistad09',
    name: 'Guadalupe Santiago',
    envelopeName: 'Guadalupe Santiago',
    greeting: 'Querida Guadalupe:',
    personal: [
      '[Cómo se conocieron.]',
      '[Recuerdo, cualidad o agradecimiento personal.]',
    ],
  }),
  amistad10: createFriend({
    id: 'amistad10',
    name: 'Beatriz',
    greeting: 'Querida Beatriz:',
    personal: [
      '[Cómo se conocieron.]',
      '[Recuerdo, cualidad o agradecimiento personal.]',
    ],
  }),
};

export const currentLetter = letters.amistad01;

/** Link público para compartir: /?para=daniela-gomez */
export function getSharePath(letter) {
  return `/?para=${letter.slug}`;
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
        slugifyName(letter.envelopeName || '') === key,
    ) || null
  );
}
