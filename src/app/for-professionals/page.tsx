import {Header} from './sections/header';
import { TopBar } from '@/components/top-bar';
import { Footer } from '@/components/footer';

export default function ParaProfissionais() {
  return (
    <div className='bg-white'>
      <TopBar/>
      <Header />
      <Footer/>
    </div>
  );
}