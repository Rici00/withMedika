import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import Image from 'next/image'
import clsx from 'clsx'

import imgbahaya1 from '@/images/logos/bahaya1.png'
import imgbahaya2 from '@/images/logos/bahaya2.png'
import imgbahaya3 from '@/images/logos/bahaya3.png'
import imgbahaya4 from '@/images/logos/bahaya4.png'


export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-cyan-200 py-8 sm:py-12"
    >
      {/* <!-- Flex container --> */}
      <div
        class="container flex flex-col px-6 md:px-32 text-center md:text-left mx-auto mt-10 space-y-18 md:space-y-0 md:flex-row mx-auto items-center"
      >
        {/* <!-- kiri --> */}
        <div class="flex flex-col space-y-12 md:w-1/2">
          <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            Kenapa kita harus mencegah Stunting?
          </h2>
          <p class="max-w-sm  text-darkGrayishBlue text-center md:text-left">
            biar ga kayak adin. canda adin. tapi kamu bisa jadi salah satu contoh biar orang-orang ga stunting. ril ini mah.
          </p>
        </div>
        {/* image */}
        <div class="flex flex-col space-y-8 md:w-1/2">
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <div>
            <ul
              role="list"
              className="mx-auto mt-4 flex max-w-xl flex-wrap justify-center gap-x-8 gap-y-0 lg:mx-0 lg:justify-start mb-8"
            >
              {[
                ['bahaya1', imgbahaya1],
                ['bahaya2', imgbahaya2],
                ['bahaya3', imgbahaya3],
                ['bahaya4', imgbahaya4],
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx('flex', className)}>
                  {/* <Image src={logo} alt={name} className="h-25" unoptimized /> */}
                  <Image src={logo} alt={name} style={{ width: '272px', height: 'auto' }} unoptimized />

                </li>
              ))}
            </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}