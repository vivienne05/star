
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"

export default function Home() {
  useEffect(()=> {
    router.push('/home')
  }, [])
  return (
    <></>
  )
}
