'use client'

import React from 'react'
import { Button } from '../ui/button'
import { ArrowBigUp } from 'lucide-react'
import { Input } from '../ui/input'

interface UploadFormInputProp {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UploadFormInput = ({ onSubmit }: UploadFormInputProp) => {
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
                    <Button className='bg-orange-400'>
                        Uplod Your Files <ArrowBigUp />
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default UploadFormInput