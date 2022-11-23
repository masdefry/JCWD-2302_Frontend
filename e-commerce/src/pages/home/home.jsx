import React from 'react';

import { Link } from 'react-router-dom';

class Home extends React.Component{
    
  state = {
    number: 0
  }

  // changeNumber = () => {
  //   let newNumber = this.state.number // 0
  //   newNumber++ // 1
  //   this.setState({number: newNumber}) //number: 1
  // }

  // changeNumber1 = () => {
  //   let newNumber = this.state.number // 1 ---> 0
  //   newNumber-- // 0 ---> -1
  //   this.setState({number: newNumber}) // number: 0 ---> number: -1
  // }

  changeNumber = (operator) => {
    if(operator === '+'){
      this.setState({number: this.state.number+1})
    }else{
      this.setState({number: this.state.number-1})
    }
  }

  componentDidMount(){
    // Sering digunakan untuk melakukan fetch data
    // Dijalankan ketika proses render pertama kali jalan
    console.log('CompDidMount Running!')
  }

  componentDidUpdate(){
    // Dijalankan setiap kali terjadi perubahan state
    console.log('CompDidUpdate Jalan')
  }

  componentWillUnmount(){
    // Dijalankan sebelum component dihapus 
    // Sebelum berpindah page
    alert('Yakin?')
  }

  render(){
    console.log('Render Jalan 1x')
    return(
      <>
        <h1>
          This is App
        </h1>
        <button onClick={() => this.changeNumber('-')}>
          -
        </button>
        <h1>
          {
            this.state.number
          }
        </h1>
        <button onClick={() => this.changeNumber('+')}>
          +
        </button>
        <Link to='/profile'>
          <h1>
            Menuju ke Profile
          </h1>
        </Link>
        </>
        )
    }
}

export default Home