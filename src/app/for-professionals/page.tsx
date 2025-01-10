import {Header} from './sections/header';
import { TopBar } from '@/components/top-bar';
import { Footer } from '@/components/footer';
import { ProlancerProfile } from './sections/prolancer-profile';
import { StepsToBecomeProlancer } from './sections/steps-to-become';
import { Evaluations } from './sections/evaluations';
import { WhyBeProlancer } from './sections/why-be-prolancer';
import { RelevantProjects } from './sections/relevant-projects';
import { OrganizedWork } from './sections/organized-work';
import { HelpWithTasks } from './sections/help-with-tasks';
import { WorkWithTalentedProfessionals } from './sections/work-with-talented';
import { FreelancerVsProlancer } from './sections/freelancer-vs-prolancer';
import { CallToAction } from './sections/call-to-action';
import { FreelancerNetwork } from './sections/freelancer-network';
import { ProlancerOpportunities } from './sections/prolancer-opportunities';



export default function ParaProfissionais() {
  return (
    <div className='bg-white'>
      <TopBar />
      <Header />
      <ProlancerProfile />
      <StepsToBecomeProlancer />
      <Evaluations />
      <WhyBeProlancer />
      <RelevantProjects />
      <OrganizedWork />
      <HelpWithTasks />
      <WorkWithTalentedProfessionals />
      <FreelancerVsProlancer />
      <CallToAction />
      <FreelancerNetwork />
      <ProlancerOpportunities />
      <Footer />
    </div>
  );
}