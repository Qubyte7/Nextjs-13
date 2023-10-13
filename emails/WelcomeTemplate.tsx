import React, { CSSProperties } from 'react'
import {Html,Body,Container,Tailwind,Text, Link, Preview} from "@react-email/components"

interface Name{
    name: string
}
const WelcomeTemplate = ({name}:Name) => {
  return (
    <Html>
        <Preview>Welcome ! 😄</Preview>
        <Tailwind>
        <Body className='bg-white'>
            <Container>
                <Text className='font-bold text-3xl'>hello {name}</Text>
                <Link href='https://libblio.com'>libblio</Link>
            </Container>
        </Body>
        </Tailwind>
    </Html>
  )
}
const body:CSSProperties={
    background:'#fff',
}
const Heading:CSSProperties={
    fontSize:'32px'
}

export default WelcomeTemplate