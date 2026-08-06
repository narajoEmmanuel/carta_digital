import { useMemo, useState } from 'react';
import { getLetterByRecipient } from './data/letters';
import PhoneShell from './components/PhoneShell';
import HomeHub from './components/HomeHub';
import PostcardExperience from './components/PostcardExperience';
import EnvelopeExperience from './components/EnvelopeExperience';
import HugCard from './components/HugCard';
import LetterUnavailable from './components/LetterUnavailable';

/**
 * Flujo: home | postcard | envelope | hug
 * Destinatario: ?para=daniela-gomez (nombre) — también acepta amistad01…
 */
export default function App() {
  const [view, setView] = useState('home');

  const { letter, recipientId } = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('para');
    return {
      recipientId: id,
      letter: getLetterByRecipient(id),
    };
  }, []);

  const goHome = () => setView('home');

  if (!letter) {
    return (
      <PhoneShell>
        <LetterUnavailable recipientId={recipientId} />
      </PhoneShell>
    );
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

  return <PhoneShell>{screen}</PhoneShell>;
}
