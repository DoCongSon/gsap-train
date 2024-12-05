'use client'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home() {
  useGSAP(() => {
    gsap.to('.gsap-year-container', {
      scrollTrigger: {
        trigger: '.gsap-year-container',
        endTrigger: '.gsap-content-container',
        start: '-=320 top',
        end: 'bottom bottom',
        pin: true,
        scrub: true,
      },
    })

    const gsapYearTrigger = gsap.utils.toArray('.gsap-year-trigger') as HTMLElement[]
    const gsapYear = gsap.utils.toArray('.gsap-year') as HTMLElement[]
    gsapYearTrigger.forEach((year, index) => {
      gsap.to(year, {
        scrollTrigger: {
          trigger: year,
          start: 'top center',
          end: 'bottom center',
          onToggle: ({ isActive }) => {
            if (isActive) {
              gsap.to('.gsap-year-wrap', { duration: 1, y: (-100 / gsapYearTrigger.length) * index + '%' })
              gsapYear[index].classList.add(
                'bg-clip-text',
                'text-transparent',
                'bg-gradient-to-b',
                'from-[#4CA757]',
                'to-[#16A571]'
              )
            } else {
              gsapYear[index].classList.remove(
                'bg-clip-text',
                'text-transparent',
                'bg-gradient-to-b',
                'from-[#4CA757]',
                'to-[#16A571]'
              )
            }
          },
        },
      })
    })

    const gsapContent = gsap.utils.toArray('.gsap-content-item') as HTMLElement[]
    gsapContent.forEach((content) => {
      gsap.to(content, {
        scrollTrigger: {
          trigger: content,
          start: 'top center',
          end: 'bottom center',
          onToggle: ({ isActive }) => {
            if (isActive) {
              content.classList.add(
                '[&>h2]:bg-clip-text',
                '[&>h2]:text-transparent',
                '[&>h2]:bg-gradient-to-b',
                '[&>h2]:from-[#4CA757]',
                '[&>h2]:to-[#16A571]'
              )
            } else {
              content.classList.remove(
                '[&>h2]:bg-clip-text',
                '[&>h2]:text-transparent',
                '[&>h2]:bg-gradient-to-b',
                '[&>h2]:from-[#4CA757]',
                '[&>h2]:to-[#16A571]'
              )
            }
          },
        },
      })
    })

    const tl = gsap.timeline({
      paused: true,
    })
    tl.fromTo('.progress', { strokeDashoffset: 1488.36 }, { strokeDashoffset: 0 })

    ScrollTrigger.create({
      trigger: '.gsap-content-container',
      start: 'top bottom',
      end: 'bottom bottom',
      animation: tl,
      scrub: true,
    })
  })

  return (
    <>
      <div className='w-full h-screen' />
      <div className='w-full max-w-screen-3xl mx-auto px-[4.38rem]'>
        <h2 className='text-lg font-extrabold leading-normal uppercase text-xam'>OIE Projects - Annual HSEQ Summary</h2>
        <div className='mt-[0.875rem] w-full h-[1px] bg-vien' />
        <div className='pl-[50rem] relative'>
          <div className='flex item-center mt-[20rem] absolute left-0 gsap-year-container pr-[8.25rem]'>
            <div className='w-[30.875rem] h-[30.875rem] rounded-full absolute -top-[6rem] left-[10rem]'>
              <svg
                width='494'
                height='494'
                viewBox='-61.75 -61.75 617.5 617.5'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                className='transform -rotate-90'>
                <circle
                  r='237'
                  cx='247'
                  cy='247'
                  fill='transparent'
                  stroke='#376a66'
                  stroke-width='1'
                  stroke-dasharray='1488.36px'
                  stroke-dashoffset='0'></circle>
                <circle
                  r='237'
                  cx='247'
                  cy='247'
                  stroke='#4ca757'
                  stroke-width='4'
                  stroke-linecap='round'
                  stroke-dashoffset='878px'
                  fill='transparent'
                  className='progress'
                  stroke-dasharray='1488.36px'></circle>
              </svg>
            </div>
            <div className='items-start text-[15rem] font-extrabold leading-[1.2] text-[#F2F2F3] flex relative'>
              <p>20</p>
              <div className='gsap-year-wrap'>
                <p className='gsap-year'>21</p>
                <p className='gsap-year'>22</p>
                <p className='gsap-year'>23</p>
              </div>
            </div>
          </div>
          <div className='gsap-content-container'>
            <div className='gsap-year-trigger'>
              <div className='pt-12 gsap-content-item'>
                <h3 className='text-lg font-black text-subTitle'>2021</h3>
                <h2 className='mt-4 text-[2rem] leading-snug font-extrabold text-xam'>
                  OIE Construction Projects - HSEQ Yearly Snapshot 2021
                </h2>
                <p className='mt-2 text-lg text-text'>
                  Lorem ipsum dolor sit amet consectetur. Amet rhoncus a morbi scelerisque sed praesent tempor.{' '}
                </p>
                <div className='mt-8 w-full h-[1px] bg-vien' />
                <h4 className='mt-10 text-[2rem] leading-snug bg-clip-text font-extrabold text-xam'>
                  Welcome to OIE&apos;s brief annual summary of our Health, Safety, Environment, and Quality (HSEQ)
                  performance for the year 2023.
                </h4>
                <div className='flex flex-col gap-4 mt-6 [&>p]:text-lg [&>p]:text-text [&>p>b]:text-xl [&>p>b]:font-extrabold'>
                  <p>
                    <b>Health:</b> Incident Rate: 3 incidents per 100 full-time employeesSick Days: 1.8% of total
                    working days
                  </p>
                  <p>
                    <b>Safety:</b> Total Recordable Incident Rate: 4.5 per 100 full-time employees. Safety Compliance
                    Rate: 97%
                  </p>
                  <p>
                    <b>Quality:</b> Customer Satisfaction: 92% satisfaction rateProject Delivery: 90% on-time and
                    on-budget Highlights
                  </p>
                  <p>
                    Obtained ISO 14001 Environmental Management Certification.Launched new safety training
                    program.Completed the XYZ project ahead of schedule and under budget.As we move into 2024, we stay
                    committed to excellence in health, safety, environmental sustainability, and quality in our
                    construction projects. Thank you for your support.
                  </p>
                </div>
              </div>
              <div className='pt-12 gsap-content-item'>
                <h3 className='text-lg font-black text-subTitle'>2021</h3>
                <h2 className='mt-4 text-[2rem] leading-snug font-extrabold text-xam'>
                  OIE Construction Projects - HSEQ Yearly Snapshot 2021
                </h2>
                <p className='mt-2 text-lg text-text'>
                  Lorem ipsum dolor sit amet consectetur. Amet rhoncus a morbi scelerisque sed praesent tempor.{' '}
                </p>
                <div className='mt-8 w-full h-[1px] bg-vien' />
                <h4 className='mt-10 text-[2rem] leading-snug bg-clip-text font-extrabold text-xam'>
                  Welcome to OIE&apos;s brief annual summary of our Health, Safety, Environment, and Quality (HSEQ)
                  performance for the year 2023.
                </h4>
                <div className='flex flex-col gap-4 mt-6 [&>p]:text-lg [&>p]:text-text [&>p>b]:text-xl [&>p>b]:font-extrabold'>
                  <p>
                    <b>Health:</b> Incident Rate: 3 incidents per 100 full-time employeesSick Days: 1.8% of total
                    working days
                  </p>
                  <p>
                    <b>Safety:</b> Total Recordable Incident Rate: 4.5 per 100 full-time employees. Safety Compliance
                    Rate: 97%
                  </p>
                  <p>
                    <b>Quality:</b> Customer Satisfaction: 92% satisfaction rateProject Delivery: 90% on-time and
                    on-budget Highlights
                  </p>
                  <p>
                    Obtained ISO 14001 Environmental Management Certification.Launched new safety training
                    program.Completed the XYZ project ahead of schedule and under budget.As we move into 2024, we stay
                    committed to excellence in health, safety, environmental sustainability, and quality in our
                    construction projects. Thank you for your support.
                  </p>
                </div>
              </div>
              <div className='pt-12 gsap-content-item'>
                <h3 className='text-lg font-black text-subTitle'>2021</h3>
                <h2 className='mt-4 text-[2rem] leading-snug font-extrabold text-xam'>
                  OIE Construction Projects - HSEQ Yearly Snapshot 2021
                </h2>
                <p className='mt-2 text-lg text-text'>
                  Lorem ipsum dolor sit amet consectetur. Amet rhoncus a morbi scelerisque sed praesent tempor.{' '}
                </p>
                <div className='mt-8 w-full h-[1px] bg-vien' />
                <h4 className='mt-10 text-[2rem] leading-snug bg-clip-text font-extrabold text-xam'>
                  Welcome to OIE&apos;s brief annual summary of our Health, Safety, Environment, and Quality (HSEQ)
                  performance for the year 2023.
                </h4>
                <div className='flex flex-col gap-4 mt-6 [&>p]:text-lg [&>p]:text-text [&>p>b]:text-xl [&>p>b]:font-extrabold'>
                  <p>
                    <b>Health:</b> Incident Rate: 3 incidents per 100 full-time employeesSick Days: 1.8% of total
                    working days
                  </p>
                  <p>
                    <b>Safety:</b> Total Recordable Incident Rate: 4.5 per 100 full-time employees. Safety Compliance
                    Rate: 97%
                  </p>
                  <p>
                    <b>Quality:</b> Customer Satisfaction: 92% satisfaction rateProject Delivery: 90% on-time and
                    on-budget Highlights
                  </p>
                  <p>
                    Obtained ISO 14001 Environmental Management Certification.Launched new safety training
                    program.Completed the XYZ project ahead of schedule and under budget.As we move into 2024, we stay
                    committed to excellence in health, safety, environmental sustainability, and quality in our
                    construction projects. Thank you for your support.
                  </p>
                </div>
              </div>
            </div>
            <div className='gsap-year-trigger'>
              <div className='pt-12 gsap-content-item'>
                <h3 className='text-lg font-black text-subTitle'>2022</h3>
                <h2 className='mt-4 text-[2rem] leading-snug font-extrabold text-xam'>
                  OIE Construction Projects - HSEQ Yearly Snapshot 2022
                </h2>
                <p className='mt-2 text-lg text-text'>
                  Lorem ipsum dolor sit amet consectetur. Amet rhoncus a morbi scelerisque sed praesent tempor.{' '}
                </p>
                <div className='mt-8 w-full h-[1px] bg-vien' />
                <h4 className='mt-10 text-[2rem] leading-snug bg-clip-text font-extrabold text-xam'>
                  Welcome to OIE&apos;s brief annual summary of our Health, Safety, Environment, and Quality (HSEQ)
                  performance for the year 2023.
                </h4>
                <div className='flex flex-col gap-4 mt-6 [&>p]:text-lg [&>p]:text-text [&>p>b]:text-xl [&>p>b]:font-extrabold'>
                  <p>
                    <b>Health:</b> Incident Rate: 3 incidents per 100 full-time employeesSick Days: 1.8% of total
                    working days
                  </p>
                  <p>
                    <b>Safety:</b> Total Recordable Incident Rate: 4.5 per 100 full-time employees. Safety Compliance
                    Rate: 97%
                  </p>
                  <p>
                    <b>Quality:</b> Customer Satisfaction: 92% satisfaction rateProject Delivery: 90% on-time and
                    on-budget Highlights
                  </p>
                  <p>
                    <b>Health:</b> Incident Rate: 3 incidents per 100 full-time employeesSick Days: 1.8% of total
                    working days
                  </p>
                  <p>
                    <b>Safety:</b> Total Recordable Incident Rate: 4.5 per 100 full-time employees. Safety Compliance
                    Rate: 97%
                  </p>
                  <p>
                    <b>Quality:</b> Customer Satisfaction: 92% satisfaction rateProject Delivery: 90% on-time and
                    on-budget Highlights
                  </p>
                  <p>
                    Obtained ISO 14001 Environmental Management Certification.Launched new safety training
                    program.Completed the XYZ project ahead of schedule and under budget.As we move into 2024, we stay
                    committed to excellence in health, safety, environmental sustainability, and quality in our
                    construction projects. Thank you for your support.
                  </p>
                </div>
              </div>
              <div className='pt-12 gsap-content-item'>
                <h3 className='text-lg font-black text-subTitle'>2022</h3>
                <h2 className='mt-4 text-[2rem] leading-snug font-extrabold text-xam'>
                  OIE Construction Projects - HSEQ Yearly Snapshot 2022
                </h2>
                <p className='mt-2 text-lg text-text'>
                  Lorem ipsum dolor sit amet consectetur. Amet rhoncus a morbi scelerisque sed praesent tempor.{' '}
                </p>
                <div className='mt-8 w-full h-[1px] bg-vien' />
                <h4 className='mt-10 text-[2rem] leading-snug bg-clip-text font-extrabold text-xam'>
                  Welcome to OIE&apos;s brief annual summary of our Health, Safety, Environment, and Quality (HSEQ)
                  performance for the year 2023.
                </h4>
                <div className='flex flex-col gap-4 mt-6 [&>p]:text-lg [&>p]:text-text [&>p>b]:text-xl [&>p>b]:font-extrabold'>
                  <p>
                    <b>Health:</b> Incident Rate: 3 incidents per 100 full-time employeesSick Days: 1.8% of total
                    working days
                  </p>
                  <p>
                    <b>Safety:</b> Total Recordable Incident Rate: 4.5 per 100 full-time employees. Safety Compliance
                    Rate: 97%
                  </p>
                  <p>
                    <b>Quality:</b> Customer Satisfaction: 92% satisfaction rateProject Delivery: 90% on-time and
                    on-budget Highlights
                  </p>
                  <p>
                    <b>Health:</b> Incident Rate: 3 incidents per 100 full-time employeesSick Days: 1.8% of total
                    working days
                  </p>
                  <p>
                    <b>Safety:</b> Total Recordable Incident Rate: 4.5 per 100 full-time employees. Safety Compliance
                    Rate: 97%
                  </p>
                  <p>
                    <b>Quality:</b> Customer Satisfaction: 92% satisfaction rateProject Delivery: 90% on-time and
                    on-budget Highlights
                  </p>
                  <p>
                    Obtained ISO 14001 Environmental Management Certification.Launched new safety training
                    program.Completed the XYZ project ahead of schedule and under budget.As we move into 2024, we stay
                    committed to excellence in health, safety, environmental sustainability, and quality in our
                    construction projects. Thank you for your support.
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-12 gsap-content-item gsap-year-trigger'>
              <h3 className='text-lg font-black text-subTitle'>2023</h3>
              <h2 className='mt-4 text-[2rem] leading-snug font-extrabold text-xam'>
                OIE Construction Projects - HSEQ Yearly Snapshot 2023
              </h2>
              <p className='mt-2 text-lg text-text'>
                Lorem ipsum dolor sit amet consectetur. Amet rhoncus a morbi scelerisque sed praesent tempor.{' '}
              </p>
              <div className='mt-8 w-full h-[1px] bg-vien' />
              <h4 className='mt-10 text-[2rem] leading-snug bg-clip-text font-extrabold text-xam'>
                Welcome to OIE&apos;s brief annual summary of our Health, Safety, Environment, and Quality (HSEQ)
                performance for the year 2023.
              </h4>
              <div className='flex flex-col gap-4 mt-6 [&>p]:text-lg [&>p]:text-text [&>p>b]:text-xl [&>p>b]:font-extrabold'>
                <p>
                  <b>Health:</b> Incident Rate: 3 incidents per 100 full-time employeesSick Days: 1.8% of total working
                  days
                </p>
                <p>
                  <b>Safety:</b> Total Recordable Incident Rate: 4.5 per 100 full-time employees. Safety Compliance
                  Rate: 97%
                </p>
                <p>
                  <b>Quality:</b> Customer Satisfaction: 92% satisfaction rateProject Delivery: 90% on-time and
                  on-budget Highlights
                </p>
                <p>
                  Obtained ISO 14001 Environmental Management Certification.Launched new safety training
                  program.Completed the XYZ project ahead of schedule and under budget.As we move into 2024, we stay
                  committed to excellence in health, safety, environmental sustainability, and quality in our
                  construction projects. Thank you for your support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-screen' />
    </>
  )
}
