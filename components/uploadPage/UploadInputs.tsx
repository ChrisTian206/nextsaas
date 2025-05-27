import React from 'react'
import { Button } from '../ui/button'
import { ArrowBigUp } from 'lucide-react'

const UploadInputs = () => {
    return (
        <div>
            <form action="" className='flex flex-col gap-2'>
                <input type="text" />
                <Button className='bg-orange-400'>
                    Uplod Your Files <ArrowBigUp />
                </Button>
            </form>
        </div>
    )
}

export default UploadInputs