// import Image from 'next/image'

import FormSimulator from "@/components/FormSimulator"
import { GetStaticProps } from "next"

export const Home = () => {
  return (
    <main>
      <FormSimulator />
    </main>
  )
}

interface Props {
  maths: any
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('https://api.mathjs.org/v4')
  const maths: any = await res.json()

  return {
    props: {
      maths,
    }
  }
}
