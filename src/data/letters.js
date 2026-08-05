/**
 * Datos de ejemplo para la carta digital.
 * Cambiá este objeto (o agregá más entradas) para personalizar la experiencia.
 */
export const letters = {
  andrea: {
    id: 'andrea',
    nombre: 'Andrea',

    postcard: {
      // Ruta relativa a public/ — reemplazá con una foto real de Costa Rica
      imagen: '/assets/costa-rica-placeholder.svg',
      lugar: 'Costa Rica',
      mensaje:
        'Guardé este pedacito de verde y cielo para vos. Que te llegue como un recuerdo suave, aunque estemos lejos.',
      firmante: 'Con cariño',
    },

    envelope: {
      destinatario: 'Para Andrea',
      remitente: 'De alguien que te quiere',
      intro: 'Hay cosas que se dicen mejor en papel.',
    },

    carta: {
      secciones: [
        {
          id: 'saludo',
          titulo: null,
          texto:
            'Andrea,\n\nEscribí esto pensando en vos. No como un mensaje rápido, sino como algo que se abre despacio.',
        },
        {
          id: 'cuerpo',
          titulo: null,
          texto:
            'Quería dejarte un pedacito de cercanía: de esas charlas que se alargan, de las risas que no necesitan explicación, de la amistad que se queda aunque el tiempo se mueva.',
        },
        {
          id: 'cierre',
          titulo: null,
          texto:
            'Gracias por ser parte de mi historia. Que esta carta te encuentre bien, y que sepas que estás presente, siempre.',
        },
      ],
      firma: 'Con todo el cariño del mundo',
    },

    abrazo: {
      mensaje: 'Este abrazo es para vos. Apretadito, sincero, y sin prisa.',
      nota: 'Guardalo para cuando lo necesites.',
    },
  },
};

export const currentLetter = letters.andrea;
