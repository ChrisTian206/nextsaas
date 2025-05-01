import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Sparkle } from 'lucide-react'

const Mainbody = () => {
    return (
        <section>
            <div className=''>
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

                <h1>All you PDFs, Make Your Personalized AI</h1>
                <h2>Chat with your PDFs using your own data</h2>
                <Button>Try ChatPDF</Button>
            </div >
        </section>
    )
}

export default Mainbody