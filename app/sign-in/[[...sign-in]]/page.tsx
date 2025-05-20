import GradientBg from '@/components/common/GradientBg'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <section className='flex fle-col justify-center lg:min-h-[40px]'>
            <div className='py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12'>
                <GradientBg className='from-orange-800 via-red-500 to-rose-200' />
                <SignIn />
            </div>
        </section>
    )
}