import { BookCheck, BrainCircuit, FileText, MoveRight } from 'lucide-react';
import React, { ReactNode } from 'react'
import StepItem from './StepItem';

type Step = {
    icon: ReactNode;
    label: string;
    description: string;
}

const steps: Step[] = [
    {
        icon: <FileText size={64} strokeWidth={1.5} />,
        label: "Upload Your Files",
        description: "Those files will form a knowledge base"
    },
    {
        icon: <BrainCircuit size={64} strokeWidth={1.5} />,
        label: "AI Analysis",
        description: "Our advanced AI workflow will analyze your files instantly"
    },
    {
        icon: <BookCheck size={64} strokeWidth={1.5} />,
        label: "Your Assistant is Ready",
        description: "Here you have your AI tailored to your documents."
    }
]

const WalkTrou = () => {
    return (
        <section className='relative overflow-hidden bg-gray-50'>
            <div className='py-12 lg:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-br
          from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

            <div className='text-center mb-12 '>
                <h2 className='font-bold text-xl uppercase mb-4 text-orange-400'>How it works?</h2>
                <h3 className='font-bold text-3xl max-w-2xl mx-auto'>Create a chatbot for your knowledge base by upload your files, in simply 3 steps </h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative'>
                {
                    steps.map((step, index) => (
                        <div className='relative flex items-stretch' key={index}>
                            <StepItem  {...step} />

                            {index < steps.length - 1 &&
                                (
                                    <div className='hidden md:block absolute top-1/2 -right-4 transform 
                                -translate-y-1/2 z-10'>
                                        <MoveRight size={32} strokeWidth={1} className='text-orange-300' />
                                    </div>
                                )
                            }
                        </div>
                    )
                    )
                }
            </div>
        </section>
    )
}

export default WalkTrou