// import { Label } from '@headlessui/react/dist/components/label/label'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function EditProfile() {
  return (
    <div className="flex  justify-center bg-white-700 border-2 border-black-900 border-solid flex-col gap-[17px] mb-[15px] p-[11px] md:px-5 rounded-[15px] w-[70%] sm:w-full ">
        <p>Edit your Infos</p>
        <div>
            <Label>Password</Label>
            <Input/>
        </div>
        <div>
            <Label>New Password</Label>
            <Input/>
        </div>
        <div>
            <Label>Confirm New Password</Label>
            <Input/>
        </div>
        <div>
            <Button>Edit</Button>
        </div>
        
    </div>
  )
}

export default EditProfile