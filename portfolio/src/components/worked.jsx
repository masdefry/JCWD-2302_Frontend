import { useState } from 'react';

function Worked(){
    const [data, setData] = useState([
        { year: '2020-2022', company: 'Purwadhika' },
        { year: '2022-Pensiun', company: 'Telkomsel' }
      ])
    
      const [idxSelected, setIdxSelected] = useState(0)
    
      let onChange = (idx) => {
        setIdxSelected(idx)
      }

      let onMapping = () => {
        return data.map((value, index) => {
            return(
                <div onClick={() => onChange(index)}>
                    {value.year}
                </div>
            )
        })
      }
    return(
        <div className="worked">
        <div className="title">
            <h1>
                02. Where Ive Worked
            </h1>
            <div className="line">
            
            </div>
        </div>
        <div className="sidebar">
            {
                // onMapping()
                data.map((value, index) => {
                    return(
                        <div onClick={() => onChange(index)}>
                            {value.year}
                        </div>
                    )
                })

            }
        </div>
        <div className="description">
             <div>
             <p className="title">
                 {data[idxSelected].company}
             </p>
             <p className="desc">
               {data[idxSelected].year}
             </p>
           </div>
        </div>
      </div>
    )
}

export default Worked