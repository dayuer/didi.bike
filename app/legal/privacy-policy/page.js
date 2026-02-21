import LegalPage from '../LegalPage';
import { htmlContent } from './content';

export const metadata = {
  title: 'Privacy Policy | DIDI.BIKE',
  description: 'DIDI.BIKE Privacy Policy — Data collection, usage, and protection policies.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </LegalPage>
  );
}
