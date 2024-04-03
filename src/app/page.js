'use client';

import HeroGrid from '@/components/layouts/HeroGrid';
import PaddingContainer from '@/components/layouts/PaddingContainer';
import Testimonials from '@/components/layouts/Testimonials';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import { testimonials } from '@/lib/data';

const images = [
  '/landscape-1.jpeg',
  '/landscape-2.jpeg',
  '/landscape-3.jpeg',
  '/landscape-4.jpeg',
  '/landscape-5.jpeg',
  '/landscape-6.jpeg',
  '/landscape-7.jpeg',
];

const imageGallery = [
  '/landscape-1.jpeg',
  '/landscape-2.jpeg',
  '/potrait-1.jpeg',
  '/potrait-2.jpeg',
  '/landscape-3.jpeg',
  '/potrait-3.jpeg',
  '/landscape-4.jpeg',
];

export default function Home() {
  return (
    <main>
      <section className=''>
        <PaddingContainer classname='flex flex-col gap-y-8 md:gap-y-12 justify-center items-center lg:items-end h-[calc(100vh-64px)]'>
          <div className='flex w-full flex-col items-center justify-center gap-y-4 text-center lg:w-[60%] lg:items-end lg:text-right'>
            <h1 className='font-headline text-4xl-pacifico text-neutral-200 md:text-5xl-pacifico lg:text-6xl-pacifico'>
              Beyond Pixels, Into Emotions.
            </h1>
            <p className='font-body text-neutral-300 lg:w-[80%]'>
              Elevating event photography beyond expectations, Trust our proven
              track record of framing{' '}
              <span className='font-bold'>Perfection</span>.
            </p>
          </div>
          <div className='flex flex-col items-center gap-x-8 gap-y-4 md:flex-row-reverse md:justify-center md:gap-y-0 lg:gap-x-10'>
            <Button size={false} variant='primary'>
              Plan your shoot
            </Button>
            <Button variant='secondary'>View our portfolio</Button>
          </div>
          <div className='absolute left-0 top-0 -z-[2] h-screen w-full before:absolute before:left-0 before:top-0 before:z-[1] before:h-full before:w-full before:bg-overlay-72 before:content-[""]'>
            <Carousel imgSrc={images} />
          </div>
        </PaddingContainer>
      </section>

      {/* Signature Shots */}

      <section className='relative mt-12 md:mt-[72px] lg:mt-24'>
        <PaddingContainer classname='grid place-items-center'>
          <h2 className='text-center font-headline text-2xl-pacifico text-neutral-300 md:text-4xl-pacifico lg:text-5xl-pacifico'>
            Signature Shots.
          </h2>
          <HeroGrid images={imageGallery} />
          <Button variant='secondary' className='mt-8 block lg:mt-12'>
            View our Portfolio
          </Button>
        </PaddingContainer>
      </section>

      {/* Testimonials */}
      <section className='relative mt-12 md:mt-[72px] lg:mt-24'>
        <PaddingContainer classname='relative'>
          <h2 className='text-center font-headline text-2xl-pacifico text-neutral-300 md:text-4xl-pacifico lg:text-5xl-pacifico'>
            Happy clients, Happy stories.
          </h2>
          <Testimonials userReviews={testimonials} className='mt-6 md:mt-6' />
        </PaddingContainer>
      </section>
    </main>
  );
}
