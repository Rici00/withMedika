import { Container } from '@/components/Container'
import Image from 'next/image'
import ciri from '@/images/logos/ciri.png'

export function Ciri() {
    return (
      <section
        id="ciri"
        aria-label="Features for building a portfolio"
        className="py-4 sm:py-12 bg-cyan-400"
      >
        <Container>
          <div className="flex flex-col items-center justify-center md:flex-row mx-auto max-w-7xl text-center">
            {/* Left Column with Image */}
            <div className="md:w-1/2 md:mr-16">
              {/* Adjusted margin on the right */}
              <div className="flex items-center justify-center mt-4 translate-x-2">
                <Image src={ciri} width={800} height={800} />
              </div>
            </div>
  
            {/* Right Column with Text */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-16 text-center md:text-right">
              <h1 className="text-8xl font-medium tracking-tight text-white">
                Kenali Cirinya!
              </h1>
            </div>
          </div>
        </Container>
      </section>
    );
  }
  
  
  
  
  
  
  

