import React from "react"
import UploadInputs from "@/components/uploadPage/UploadInputs"
import UploadMain from "@/components/uploadPage/UploadMain"
import GradientBg from '@/components/common/GradientBg'


const page = () => {
    return (
        <section className='min-h-screen'>
            <GradientBg />

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8" >
                <div className="flex flex-col justify-center items-center gap-6 text-center">
                    <UploadMain />
                    <UploadInputs />
                </div>
            </div>

        </section>
    )
}

export default page