import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image 
        src={require('./../public/1420448104.jpg')}
        alt='Kucing'
        width={'1300'}
        height={'1300'}
      /> 

      <Image 
        loader={() => 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/09/21/1420448104.jpg'}
        src="Kucing"
        alt="Kucing"
        width={'300'}
        height={'300'}
      />

      <Image 
        src={'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/09/21/1420448104.jpg'}
        alt="Kucing"
        width={'300'}
        height={'300'}
      />
    </div>
  )
}
