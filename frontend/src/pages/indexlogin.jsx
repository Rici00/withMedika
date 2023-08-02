import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Calcu } from '@/components/Calcu'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Ciri } from '@/components/Ciri'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gisca</title>
        <meta
          name="description"
          content="By leveraging insights our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main>
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Calcu />
      </main>
      <Footer />
    </>
  )
}
