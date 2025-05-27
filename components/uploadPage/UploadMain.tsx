import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Sparkle } from 'lucide-react'

const UploadMain = () => {
    return (
        <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
            <div className='flex flex-col items-center'>
                <div className='relative p-[1px] overflow-hidden rounded-full 
        bg-linear-to-r from-orange-200 via-orange-500 to-orange-700
        animate-gradient-x group'>
                    <Badge variant={"secondary"} className="relative px-6 py-2 text-base 
                font-medium bg-white rounded-full group-hover:bg-gray-50 
                transition-colors duration-300 group-hover:cursor-pointer">
                        <Sparkle className='w-6 h-6 mr-2 text-orange-500 animate-pulse' />
                        <p className='text-base text-orange-400'>Powered by Agentic RAG</p>
                    </Badge>
                </div>

                <div className='capitalized text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    <h1 className='font-bold py-6 text-center'>
                        Start Uploading Your{` `}
                        <span className='relative inline-block'>
                            <span className='relative z-10 px-2'>Files</span>
                            <span className='absolute inset-0 bg-orange-300/50 -rotate-2
            rounded-lg transform -skew-y-1'></span>
                        </span>
                        {` `}
                    </h1>
                </div>
                <div className='capitalized mt-2 text-lg leading-8 text-gray-600 max-w-2xl'>
                    <p>
                        Ready to have your AI for your files
                    </p>
                </div>
            </div>
        </div>

    )
}

export default UploadMain