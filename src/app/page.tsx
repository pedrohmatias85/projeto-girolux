import Header from './components/header'
import Body from './components/body'

export default function Home() {
  return (
    <div style={{maxWidth:"700px"}} className='mx-auto'>
     <Header></Header>
     <Body></Body>                 
    </div>
  )
}
