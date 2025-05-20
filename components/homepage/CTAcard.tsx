import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CTAcard = () => {
    return (
        <section className='bg-gray-50 py-12'>
            <div className='py-12 lg:py-24 max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12'>
                <div className='flex flex-col justify-center space-y-4 text-center'>
                    <h2 className='text-3xl font-bold -tracking-tight sm:text-4xl md:text-5xl'>
                        Let's Get YOUR Personalized Chatbot For Your Files
                    </h2>
                    <p className='mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                        Don't go general, Go Personalized
                    </p>
                </div>

                <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center mt-3'>
                    <div>
                        <Button variant={'link'} size='lg' className='w-full min-[400px]:w-auto bg-linear-to-r from-slate-500 to-orange-500 hover:from-orange-500 hover:to-slate-500 hover:text-white transition-all duration-200 '>
                            <Link href="/#pricing" className='text-white flex items-center justify-center '>
                                Get Started <ArrowRight className='ml-2 h-4 w-4 animate-pulse' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTAcard