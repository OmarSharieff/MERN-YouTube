import React, { useState } from 'react';
import './SearchBar.css';
import {FaSearch} from 'react-icons/fa';
import {BsMicFill} from 'react-icons/bs';
import SearchList from './SearchList';
function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList,setSearchList] = useState(false);
  const TitleArray=["video1","video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
    <>
      <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
          <div className="search_div">
            <input type="text" className='iBox_SearchBar' placeholder='Search...' 
              onChange={e=>setSearchQuery(e.target.value)}
              onClick={e=>setSearchList(true)}
              value={searchQuery}
            /> 
            <FaSearch className='searchIcon_SearchBar'
              onClick={e=>setSearchList(false)}
            />
            <BsMicFill className='Mic_SearchBar'/>
            {searchQuery && searchList &&
              <SearchList
              TitleArray = {TitleArray}
              setSearchQuery = {setSearchQuery}
              /> 
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar
