import React, { CSSProperties } from 'react'
import {Html,Body,Container,Text, Link, Preview} from "@react-email/components"

interface Name{
    name: string
}
const WelcomeTemplate = ({name}:Name) => {
  return (
    <Html>
        <Preview>Welcome ! 😄</Preview>
        <Body>
            <Container>
                <Text className='font-bold text-3xl'>hello {name}</Text>
                <Link href='https://libblio.com'>libblio</Link>
            </Container>
        </Body> 
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