import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import  Ricad  from '../images/logo.png';
import { useEffect } from 'react'
import { NavLinks } from '@/components/NavLinks'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  let user = {}
  let Logout = () => {}
  if (typeof window !== 'undefined') {
    user = JSON.parse(localStorage.getItem("user"))  
    Logout = () => {
      localStorage.removeItem("user");
      window.location.replace('/')
    }
  }
  return (
    <header>
      <nav className='bg-white'>
        <Container className="relative z-50 bg-white flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
            <Image src={Ricad} alt="" className="h-12 w-12 flex-none fill-cyan-500" unoptimized />
            {/* <img alt='' src='../images/logo.png' className="h-10 w-10 flex-none fill-cyan-500"/> */}
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-cyan-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-cyan-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-cyan-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#wiki">
                              Wiki
                            </MobileNavLink>
                            <MobileNavLink href="#reviews">
                              Edukasi
                            </MobileNavLink>
                            <MobileNavLink href="#pricing">
                              Menu
                            </MobileNavLink>
                            <MobileNavLink href="#calcu">Kalkulator</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            { user?.email ? (
                              <Button onClick={Logout} variant="outline">
                              Logout
                              </Button>
                            ) : (
                              <Button href="/login" variant="outline">
                                Log in
                              </Button>
                            )}
                            {/* <Button href="#">Download the app</Button> */}
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            { user?.email ? (
              <Button onClick={Logout} variant="outline" className="hidden lg:block">
                Logout
              </Button>
            ) : (
              <Button href="/login" variant="outline" className="hidden lg:block">
                Log in
              </Button>
            )}
            
            {/* <Button href="#" className="hidden lg:block">
              Download
            </Button> */}
          </div>
        </Container>
      </nav>
    </header>
  )
}


import { useMediaQuery } from 'react-responsive';

// ...

function WikiScreen({ custom, animated = false }) {
  const isPhoneMode = useMediaQuery({ maxWidth: 640 });
  const largerTextSize = '18px'; // Set the desired larger text size here

  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
      <AppScreen.Title>Mari Kita <span className="text-cyan-300">Baca</span></AppScreen.Title>
        {/* <AppScreen.Subtitle>
          Apa itu kondisi <span className="text-cyan-300">Stunted, Underweight</span>, dan <span className="text-cyan-300">Overweight</span>.
        </AppScreen.Subtitle> */}
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-4">
          <div className="space-y-2">
            {[
              { label: 'Stunted', value: 'Kondisi pertumbuhan fisik dan perkembangan anak terhambat, sehingga tinggi badan kurang.' },
              { label: 'Underweight', value: 'Kondisi bobot tubuh anak lebih rendah dari yang dianggap sehat untuk usianya.' },
              { label: 'Overweight', value: 'Kondisi bobot tubuh anak terlampau besar karena adanya penumpukan lemak.' },
            ].map((field) => (
              <div key={field.label}>
                <div style={{ fontSize: isPhoneMode ? 'inherit' : largerTextSize }} className="text-sm text-cyan-500">
                  {field.label}
                </div>
                <div style={{ fontSize: isPhoneMode ? 'inherit' : largerTextSize }} className="mt-2 border-b border-gray-200 pb-2 text-xs text-gray-1000">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-cyan-500 px-3 py-2 text-center text-xs font-semibold text-white">
            Yuk Baca!
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}