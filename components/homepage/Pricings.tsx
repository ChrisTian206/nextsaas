import React from 'react'

const plans = [
    {
        name: 'Basic',
        price: 0,
        description: 'For Individual Projects and Education',
        items: [
            '3 files upload',
            'Email Support',
            '24/7 priority support',
            'Limited Storage',
        ],
        id: 'basic',
        paymentLink: '',
        priceId: '',
    },
    {
        name: 'Pro',
        price: 9,
        description: 'For professionals and teams',
        items: [
            'Unlimited File Upload',
            'Priority processing',
            '24/7 priority support',
            'Markdown Export',
        ],
        id: 'pro',
        paymentLink: '',
        priceId: '',
    }
]

const Pricings = () => {
    return (
        <section>
            <div className='py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12'>
                <div>
                    <h2>Pricings</h2>
                </div>
                <div className='relative flex justify-center flex-col lg:flex-row items-center
                lg:items-stretch gap-8'>
                    {
                        plans.map((plan, index) => (
                            <div>plan</div>
                        )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Pricings