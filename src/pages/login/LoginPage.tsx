import { Button, Heading, ButtonGroup, Breadcrumbs } from '@primer/react'

export default function LoginPage() {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <Heading as="h2">Hola Mundo</Heading>
      <Breadcrumbs>
        <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">About</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#" selected>
          Team
        </Breadcrumbs.Item>
      </Breadcrumbs>
      <ButtonGroup>
        <Button>Uno</Button>
        <Button>Dos</Button>
        <Button>Tres</Button>
      </ButtonGroup>
    </div>
  )
}
