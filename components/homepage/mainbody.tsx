import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Sparkle, ArrowRight } from 'lucide-react'

const Mainbody = () => {
    return (
        <section className=' relative mx-auto flex flex-col z-0 items-center justify-center py-16
        sm:py-20 lg:pb-28 transition-all duration-300 animate-in lg:px-12 max-w-7xl'>

            <div className='flex'>
                <div className='relative p-[1px] overflow-hidden rounded-full 
                bg-linear-to-r from-rose-200 via-rose-500 to-rose-800
                animate-gradient-x group'>
                    <Badge variant={"secondary"} className="relative px-6 py-2 text-base 
                        font-medium bg-white rounded-full group-hover:bg-gray-50 
                        transition-colors duration-300 group-hover:cursor-pointer">
                        <Sparkle className='w-6 h-6 mr-2 text-orange-500 animate-pulse' />
                        <p className='text-base text-orange-400'>Powered by Agentic RAG</p>
                    </Badge>
                </div>

            </div>

            <h1 className='font-bold py-6 text-center'>All you PDFs, Make Your Personalized AI</h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-center 
              px-4 lg:px-0 max-w-4xl text-gray-400">Chat with your PDFs using your own data</h2>
            <Button
                variant="link"
                className="group text-base sm:mt-6 text-white sm:text-l lg:text-xl
                rounded-full px-16 sm:px-20 lg:px-28 py-6 sm:py-7 lg:py-8 bg-linear-to-r from-slate-900 to-rose-900
                hover:from-rose-900 hover:to-slate-900 transition-all duration-300 transform hover:scale-105"
            >
                Try ChatPDF
                <ArrowRight className="w-6 h-6 ml-2 animate-pulse transition-transform duration-300 group-hover:translate-x-2" />
            </Button>

        </section>
    )
}

export default Mainbody