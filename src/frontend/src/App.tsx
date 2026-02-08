import { useState } from 'react';
import FinancialHealthCheckUp from './pages/FinancialHealthCheckUp';
import Contact from './pages/Contact';
import BrandedLayout from './components/BrandedLayout';

type Page = 'checkup' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('checkup');

  return (
    <BrandedLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === 'checkup' && <FinancialHealthCheckUp onNavigateToContact={() => setCurrentPage('contact')} />}
      {currentPage === 'contact' && <Contact />}
    </BrandedLayout>
  );
}

export default App;
