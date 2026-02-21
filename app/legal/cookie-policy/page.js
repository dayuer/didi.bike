import LegalPage from '../LegalPage';
import { htmlContent } from './content';

export const metadata = {
  title: 'Cookie Policy | DIDI.BIKE',
  description: 'DIDI.BIKE Cookie Policy — How we use cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </LegalPage>
  );
}
