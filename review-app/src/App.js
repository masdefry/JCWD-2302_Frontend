import { useState, useEffect } from 'react';

function App(){
  const [angka, setAngka] = useState(0) // const angka = 5
  const [data, setData] = useState('')

  let ubahAngka = (operation) => {
    // setAngka(angka + 1) // 0 + 1 ---> 1
    // setAngka(angka + 2) // 1 + 1 ---> 2
    // let newAngka = angka // 0
    // newAngka += 1 // newAngka = 1
    // newAngka += 1 // newAngka = 2
    // setAngka(newAngka) // state angka = 2

    // setAngka((previous) => previous + 1)
    // setAngka((previous) => previous + 1)

    if(operation === '+'){
      if(angka < 5){
        setAngka(angka + 1)
      }
    }else if(operation === '-'){
      if(angka > 0){
        setAngka(angka - 1)
      }
    }
  }

  useEffect(() => {
    console.log('CompDidMount Jalan!')
  }, []) // Mirip seperti CompDidMount! ---> Akan jalan setelah proses render selesai

  useEffect(() => {
    console.log('CompDidUpdate!')
  }, [data, angka]) // Mirip seperti CompDidUpdate ---> Akan jalan setelah componentDidMount dan setelah terjadi perubahan data pada state

  useEffect(() => {
    return() => {
      console.log('Yakin mau keluar?')
    }
  }, []) // Mirip seperti compWillUnmount

  return(
    <div style={{ paddingLeft: '100px' }}>
      {console.log('Render Jalan 1x')}
      <h1>
        Belajar State 
      </h1>
      <button onClick={() => ubahAngka('-')}>
        - 
      </button>
      <h1>
        {angka}
      </h1>
      <button onClick={() => ubahAngka('+')}>
        +
      </button>
    </div>
  )
}

export default App
