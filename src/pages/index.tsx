import Hero from '@/components/Hero';
import Work from '@/components/Work';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import  Project  from "@/components/Project";
import AllProjects from  "@/components/AllProjects";
import AboutMe from '@/components/AboutMe';
import Certified from '@/components/Certified';
const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Hero />
      <Work/>
      <Project/>
      <AllProjects />
      <AboutMe />
      <Certified/>
    </Main>
  );
};

export default Index;
