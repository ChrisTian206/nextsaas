'use client'

import React, { useState } from 'react'
import UploadFormInput from './UploadFormInput'
import { z } from 'zod'
import { useUploadThing } from '@/utils/uploadthings'
import { toast } from "sonner"

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
    const [isUploading, setIsUploading] = useState(false)

    const { startUpload, routeConfig } = useUploadThing(
        'pdfUploader', {
        onClientUploadComplete: () => {
            setIsUploading(false);
            console.log("Upload Success")
        },
        onUploadError: (err) => {
            setIsUploading(false);
            console.error("error occur while uploading"),
                toast.error("❌ Error Occur", {
                    description: "error occur while uploading"
                })
        },
        onUploadBegin: (file) => {
            setIsUploading(true);
            console.log('upload began:', file)
        }
    }
    )

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //console.log("Mimic: form submitted")

        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;

        if (!file || !(file instanceof File)) {
            console.error("No file selected or not a File instance");
            return;
        }

        //console.log('file:', file, 'instanceof File:', file instanceof File);

        //Validating file, before proceeding a backend call
        const isValid = schema.safeParse({ file })

        //console.log("isValid: ", isValid)
        if (!isValid.success) {
            toast.error("❌ Error Occur", {
                description: "Please check the size and format of uploaded file."
            })
            return;
        }

        //upload the file to UploadThings
        toast('Uploading file...', {
            description: 'Your file is uploading. This may take a moment.',
            icon: '⏳',
        });

        setIsUploading(true);
        const response = await startUpload([file])
        setIsUploading(false);
        //console.log("response: ", response)
        if (!response) {
            toast.error("Upload failed", {
                description: "Please try a different file or try again.",
            })
            return
        } else {
            toast('✅ Done!', {
                description: 'Your file has been uploaded!',
                icon: '⏳',
            });
        }
    }
    return (
        <div className='flex flex-col gap-8 w-full max-w-2xl mx-auto'>
            <UploadFormInput onSubmit={handleSubmit} isUploading={isUploading} />
        </div>
    )
}

export default UploadInputs