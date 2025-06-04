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
        const files = formData.getAll('file').filter(f => f instanceof File) as File[];

        if (!files.length) {
            console.error("No files selected or not File instances");
            return;
        }

        // Validate each file
        for (const file of files) {
            const isValid = schema.safeParse({ file });
            if (!isValid.success) {
                toast.error("❌ Error Occur", {
                    description: "Please check the size and format of uploaded file."
                });
                return;
            }
        }

        // Upload all files
        toast('Uploading files...', {
            description: 'Your files are uploading. This may take a moment.',
            icon: '⏳',
        });

        setIsUploading(true);
        let response = null
        for (const file of files) {
            response = response ? [...response, await startUpload([file])] : await startUpload([file])
        }
        setIsUploading(false);

        if (!response) {
            toast.error("Upload failed", {
                description: "Please try different files or try again.",
            });
            return;
        } else {
            toast('✅ Done! Analyzing files...', {
                description: 'AI is analyzing your files. This may take a moment.',
                icon: '⏳',
            });
        }

        //console.log("response: ", response)
        //this will show an array of responses, each is a JSON tells file url, who's the owner, size, type, etc.
    }
    return (
        <div className='flex flex-col gap-8 w-full max-w-2xl mx-auto'>
            <UploadFormInput onSubmit={handleSubmit} isUploading={isUploading} />
        </div>
    )
}

export default UploadInputs