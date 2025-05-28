'use client'

import React from 'react'
import UploadFormInput from './UploadFormInput'

const UploadInputs = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mimic: form submitted")
    }
    return (
        <div className='flex flex-col gap-8 w-full max-w-2xl mx-auto'>
            <UploadFormInput onSubmit={handleSubmit} />
        </div>
    )
}

export default UploadInputs