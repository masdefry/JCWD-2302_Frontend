import { useState } from 'react';

function Worked(){
    const [data, setData] = useState([
        { year: '2020-2022', company: 'Purwadhika', url: 'data:image/png;base64,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' },
        { year: '2022-Pensiun', company: 'Telkomsel', url: 'https://pbs.twimg.com/profile_images/1405865624232882176/uA2xXUFP_400x400.jpg' }
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
                        <div key={index} onClick={() => onChange(index)}>
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
             <img src={data[idxSelected].url} width='300px' height='300px' />
           </div>
        </div>
      </div>
    )
}

export default Worked