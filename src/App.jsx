import { useMemo, useState } from 'react';
import { getLetterByRecipient } from './data/letters';
import { getPreviewFlags } from './lib/preview';
import PhoneShell from './components/PhoneShell';
import HomeHub from './components/HomeHub';
import PostcardExperience from './components/PostcardExperience';
import EnvelopeExperience from './components/EnvelopeExperience';
import HugCard from './components/HugCard';
import LetterUnavailable from './components/LetterUnavailable';

/**
 * Flujo: home | postcard | envelope | hug
 * Destinatario: ?para=daniela-gomez (nombre) — también acepta amistad01…
 * Preview: ?preview=iphone[&debugLayout=true]
 */
export default function App() {
  const [view, setView] = useState('home');

  const { letter, recipientId, previewIphone, debugLayout } = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('para');
    const flags = getPreviewFlags(window.location.search);
    return {
      recipientId: id,
      letter: getLetterByRecipient(id),
      ...flags,
    };
  }, []);

  const goHome = () => setView('home');

  const shell = (screen) => (
    <PhoneShell previewIphone={previewIphone} debugLayout={debugLayout}>
      {screen}
    </PhoneShell>
  );

  if (!letter) {
    return shell(<LetterUnavailable recipientId={recipientId} />);
  }

  let screen = (
    <HomeHub
      letter={letter}
      onOpenPostcard={() => setView('postcard')}
      onOpenEnvelope={() => setView('envelope')}
    />
  );

  if (view === 'postcard') {
    screen = <PostcardExperience letter={letter} onBack={goHome} />;
  } else if (view === 'envelope') {
    screen = (
      <EnvelopeExperience
        letter={letter}
        onOpenHug={() => setView('hug')}
      />
    );
  } else if (view === 'hug') {
    screen = <HugCard letter={letter} onBack={goHome} />;
  }

  return shell(screen);
}
