import { useState } from 'react';
import { currentLetter } from './data/letters';
import PhoneShell from './components/PhoneShell';
import HomeHub from './components/HomeHub';
import PostcardExperience from './components/PostcardExperience';
import EnvelopeExperience from './components/EnvelopeExperience';
import HugCard from './components/HugCard';

/**
 * Flujo de pantallas con estado local:
 * home | postcard | envelope | hug
 */
export default function App() {
  const [view, setView] = useState('home');
  const letter = currentLetter;

  const goHome = () => setView('home');

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
        onBack={goHome}
        onOpenHug={() => setView('hug')}
      />
    );
  } else if (view === 'hug') {
    screen = <HugCard letter={letter} onBack={goHome} />;
  }

  return <PhoneShell>{screen}</PhoneShell>;
}
