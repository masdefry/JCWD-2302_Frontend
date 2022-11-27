import './App.css';

import {useEffect, useState} from 'react'
// Axios
import axios from 'axios';

// Link API
import LinkApi from './supports/constants/linkApi';

function App() {

  const [users, setUsers] = useState([])

  let getData = async() => {
    try {
      let result = await axios.get(`${LinkApi}/users`) // Mengambil data dari API Jsonplacholder ---> Kemudian datanya disimpan ke variable "data"
      setUsers(result.data) // Variable data disimpan ke dalam "state data"
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  
  if(users.length === 0){
    return(
      <div>
        Loading
      </div>
    )
  }else{
    return (
      <div className="App">
        {
          users.map((value, index) => {
            return(
              <div>
                {value.name}{value.address.street}
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;



// 1. Rendering ---> Masuk conditional statement
// 2. Didalam conditional statement dia mengecek state users, .length === 0 atau > 0?
// 3. Ketika .length === 0, maka akan nge-render "Loading"
// 4. Kemudian akan menjalankan apapun yang ada di dalam useEffect
// 5. Di dalam useEffect, menjalankan getData
// 6. Di dalam getData menyimpan data baru ke dalam state users
// 7. Karena terjadi perubahan data di dalam state, maka akan nge-render ulang
// 8. Masuk ke conditional statement
// 9. Kemudian .length sudah tidak 0, maka akan nge-render mapping nya
