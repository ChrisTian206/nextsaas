import React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { ArrowRight, Check as CheckIcon } from 'lucide-react'

type PlanType = {
    price: number,
    name: string,
    description: string,
    items: string[],
    id: string,
    paymentLink: string,
    priceId: string
}

const PricingCard = ({ name, price, description, items, id, paymentLink, priceId }: PlanType) => {
    return (
        <div className='relative w-full max-w-lg hover:scale-105 hover:transition-all duration-200 ease-in-out'>
            <div className={cn('relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl', id === 'pro' && 'border-orange-500 gap-5 border-2')}>
                <div className='flex justify-between items-center gap-4'>
                    <div>
                        <p className='text-lg lg:text-xl font-bold capitalize'>{name}</p>
                        <p className='text-base-content/80 mt-2'>{description}</p>
                    </div>
                </div>

                < div className='flex gap-2'>
                    <p className='text-5xl tracking-tight font-extrabold'>${price}</p>
                    <div className='flex flex-col justify-end mb-[4px]'>
                        <p className='text-xs uppercase font-semibold'></p>
                        <p className='text-xs'>/month</p>
                    </div>
                </div>

                <div className='space-y-2.5 leading-relaxed text-base flex-1'>
                    {items.map((item, index) => (
                        <li key={index} className='flex items-center gap-2'>
                            <CheckIcon size={18} />
                            <span>{item}</span>
                        </li>
                    ))}
                </div>

                <div className='space-y-2 flex justify-center w-full'>
                    <Link href={paymentLink}
                        className={cn('w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-orange-800 to-orange-500 transition ease-in-out hover:from-orange-500 hover:to-orange-800 text-white border-2 py-2', id === "pro" ? "border-orange-900" : " border-orange-100 from-orange-400 to-orange-500")}>
                        BuyNow
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCard