import LegalPage from '../LegalPage';
import { htmlContent } from './content';

export const metadata = {
  title: 'Terms of Service | DIDI.BIKE',
  description: 'DIDI.BIKE Terms of Service — Terms governing the use of our cycling telemetry sensors.',
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </LegalPage>
  );
}
