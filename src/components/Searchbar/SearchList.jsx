import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa'
const SearchList = ({TitleArray, setSearchQuery}) => {
  return (
    <>
      <div className="Container_SearchList">
        {
          TitleArray.map((item,index)=> {
            return <p key={index} className='titleItem'
              onClick={e=>setSearchQuery(item)}
            >
            <FaSearch/> 
            {item}
          </p>
          })
        }
        
        {/* <p className='titleItem'>
          <FaSearch/> 
          item2
        </p>
        <p className='titleItem'> 
          <FaSearch/>
          item3
        </p> */}
      </div>
    </>
  )
}

export default SearchList
