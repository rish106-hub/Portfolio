import { ArrowLeft } from 'lucide-react';
import { ExternalLinkButton } from '@/components/BrutalUI';

const NotFound = () => (
  <main className="not-found">
    <div className="not-found__card">
      <p className="card-kicker">Route not found</p>
      <h1>404</h1>
      <p>This page does not exist. The useful work is still one click away.</p>
      <ExternalLinkButton href="/" variant="primary">
        <ArrowLeft size={18} aria-hidden="true" /> Back home
      </ExternalLinkButton>
    </div>
  </main>
);

export default NotFound;
