import {Header} from './sections/header';
import { TopBar } from '@/components/top-bar';
import { Footer } from '@/components/footer';
import { Performance } from './sections/performance';
import { Consulting } from './sections/consulting';
import { Squads } from './sections/squads';
import { Allocation } from './sections/allocation';
import { ProductMethodology } from './sections/product-methodology';
import { Specialists } from './sections/specialists';
import { Comparison } from './sections/comparison';
import { Solutions } from './sections/solutions';
import { Evalutions } from './sections/evaluations';
import { Demand } from './sections/demand';






export default function ParaProfissionais() {
  return (
    <div className='bg-white'>
      <TopBar />
      <Header />
      <Performance />
      <Consulting />
      <Squads />
      <Allocation />
      <Specialists />
      <ProductMethodology />
      <Comparison />
      <Solutions />
      <Evalutions />
      <Demand />
      <Footer />
    </div>
  );
}