'use client'

import React from 'react'
import UploadFormInput from './UploadFormInput'
import { z } from 'zod'

//schema for upload file validation
const schema = z.object({
    file: z.instanceof(File, { message: "Not instance of File, Please Upload a Valid File." })
        .refine(
            (file) => file.size <= 15 * 1024 * 1024,
            { message: 'File Need To Be Under 15MB' }
        )
        .refine(
            (file) => file.type.startsWith('application/pdf'),
            { message: 'File Must Be in PDF Format' }
        )
    //mistake log: always use 'return' if using {}. Or use (), which it will automatically return value
})

const UploadInputs = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Mimic: form submitted")

        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;

        if (!file || !(file instanceof File)) {
            console.log("No file selected or not a File instance");
            return;
        }

        console.log('file:', file, 'instanceof File:', file instanceof File);

        //Validating file, before proceeding a backend call
        const isValid = schema.safeParse({ file })
        console.log("isValid: ", isValid)
        if (!isValid.success) {
            console.log(isValid.error.flatten().fieldErrors.file?.[0] ?? "Invalid File")
        }
        return

    }
    return (
        <div className='flex flex-col gap-8 w-full max-w-2xl mx-auto'>
            <UploadFormInput onSubmit={handleSubmit} />
        </div>
    )
}

export default UploadInputs