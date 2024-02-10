import React from 'react'
import RegisterExhibitor from '@/components/exhibitor/RegisterExhibitor'
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  return (
    <div>
      <RegisterExhibitor />
    </div>
  )
}
