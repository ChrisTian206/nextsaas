'use client'

import React from 'react'
import { Button } from '../ui/button'
import { ArrowBigUp, Hourglass } from 'lucide-react'
import { Input } from '../ui/input'

interface UploadFormInputProp {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isUploading?: boolean;
}

const UploadFormInput = ({ onSubmit, isUploading }: UploadFormInputProp) => {
    return (
        <div>
            <form action="" className='flex flex-col gap-2' onSubmit={onSubmit}>
                <div className='flex justify-end gap-1.5'>
                    <Input
                        id='file'
                        type="file"
                        name='file'
                        required
                        accept='application/pdf'
                        className='' />
                    <Button className='bg-orange-400' disabled={isUploading}>
                        {isUploading ? (
                            <div className="flex items-center gap-2">
                                Uploading ... <Hourglass />
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                Upload Your Files <ArrowBigUp />
                            </div>
                        )}
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default UploadFormInput