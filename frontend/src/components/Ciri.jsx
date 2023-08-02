import { Container } from '@/components/Container'
import Image from 'next/image'
import ciri from '@/images/logos/ciri.png'

export function Ciri() {
    return (
      <section
        id="ciri"
        aria-label="Features for building a portfolio"
        className="py-8 sm:py-24 bg-cyan-400"
      >
        <Container>
          <div className="flex flex-col items-center justify-center md:flex-row mx-auto max-w-7xl text-center">
            {/* Left Column with Image */}
            <div className="md:w-1/2 md:mr-16"> {/* Adjusted margin on the right */}
              <div className="flex items-center justify-center mt-4 translate-x-2">
                <Image src={ciri} width={800} height={800} />
              </div>
            </div>
  
            {/* Right Column with Text */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-16 text-center md:text-right">
              <h2 className="text-4xl font-medium tracking-tight text-gray-900">
                Kenali Cirinya!
              </h2>
              <p className="mt-4 text-xl text-gray-600 sm:text-lg">
                cirinya ga beliin richard ama thoriq kopi, ga beliin makanan, ga bawain oleh-oleh kalo pergi pergi.
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }
  
  
  
  
  
  

