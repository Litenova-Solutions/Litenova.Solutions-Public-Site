import { StandardsHero } from '@/components/standards/StandardsHero';
import { StandardsHomeBody } from '@/components/standards/StandardsHomeBody';

export const metadata = {
  title: 'Engineering Standards | Litenova Solutions',
  description:
    'Public engineering standards for Litenova Solutions — architecture, conventions, guides, and decisions.',
};

export default function StandardsHomePage() {
  return (
    <div className="min-h-screen bg-litenova-dark text-gray-100">
      <StandardsHero />
      <StandardsHomeBody />
    </div>
  );
}
