import React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"

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
        <div className='relative w-full max-w-lg'>
            <div className={cn('relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl', id === 'pro' && 'border-orange-500 gap-5 border-2')}>
                <div className='flex justify-between items-center gap-4'>
                    <div>
                        <p className='text-lg lg:text-xl font-bold capitalize'>{name}</p>
                        <p className='text-base-content/80 mt-2'>{description}</p>
                    </div>
                </div>

                <div>
                    <p>{price}</p>
                </div>

                <div>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </div>

                <div>
                    <Link href={paymentLink}> BuyNow </Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCard