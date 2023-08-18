import { useText } from '../../hooks/useText';

export default function Home() {
  const tranlator = useText();
  return <>{tranlator('homee')}</>;
}
