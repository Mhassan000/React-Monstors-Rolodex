import { useState,useEffect } from 'react';
import SearchBox from './Components/search-box/search-box.component';
import CardList from './Components/card-list/card-list.component';
import './App.css';

const App = ()=>{
  const [searchFiled,setSearchFiled]=useState('');
  const [monstors,setMonsters]=useState([]);
  const [filterMonstors,setFilteredMonsters]=useState(monstors);
  console.log('rendered');


  useEffect (()=>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> setMonsters(users))
    // console.log(monstors);
  },[]);

  useEffect(()=>{
    const newFilterMonstors = monstors.filter((monstor)=>{
      return monstor.name.toLocaleLowerCase().includes(searchFiled);
    })
    setFilteredMonsters(newFilterMonstors);
  },[monstors,searchFiled]);

  const onSearchChange = (event)=>{
    //console.log(event.target.value);
    const newSearchField = event.target.value.toLocaleLowerCase();
    setSearchFiled(newSearchField);
   //console.log(searchFiled);
  }
  return (
    <div className="App">
       <h1 className='app-title'> Monstors Rolodex</h1>

        <SearchBox 
              onChangeHandler = {onSearchChange}
              placeholder = 'Search monstors' 
              className = 'monstors-search-box' />
        <CardList monstors = {filterMonstors} />
    </div>
  )
}

export default App;
