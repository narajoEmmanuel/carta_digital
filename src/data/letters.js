/**
 * Contenido editable de la carta digital.
 * Las rutas de imagen apuntan a public/assets.
 */
export const letters = {
  andrea: {
    id: 'andrea',
    nombre: 'Andrea',

    postcard: {
      frontImage: '/assets/postcard/postal_front.png',
      backImage: '/assets/postcard/postal_back.png',
    },

    envelope: {
      letterImage: '/assets/envelope/sobre_carta_saliendo.png',
    },

    letter: {
      paperImage: '/assets/letter/hoja_carta.png',
      signatureImage: '/assets/letter/firma_artista.png',
      greeting: 'Querida Andrea:',
      pages: [
        {
          id: 'gratitude',
          showGreeting: true,
          paragraphs: [
            'Escribí esto pensando en vos. No como un mensaje rápido, sino como algo que se abre despacio.',
            'Quería dejarte un pedacito de cercanía: de esas charlas que se alargan, de las risas que no necesitan explicación, de la amistad que se queda aunque el tiempo se mueva.',
          ],
        },
        {
          id: 'personal',
          paragraphs: [
            'Gracias por ser parte de mi historia. Por esos gestos que se quedan guardados y por la forma en que hacés que todo se sienta un poco más liviano.',
          ],
        },
        {
          id: 'apology',
          paragraphs: [
            'Si en algún momento me faltó estar presente como hubiese querido, perdón. La intención siempre fue cuidarte desde donde pudiera.',
          ],
        },
        {
          id: 'closing',
          paragraphs: [
            'Que esta carta te encuentre bien, y que sepas que estás presente, siempre.',
            'Gracias por todo lo compartido.',
          ],
          showClosing: true,
          showSignature: true,
        },
      ],
      closing: 'Con cariño,',
    },

    hug: {
      image: '/assets/hug/muneco_abrazo_final.png',
    },
  },
};

export const currentLetter = letters.andrea;
