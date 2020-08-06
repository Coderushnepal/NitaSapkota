import './App.css';
import React,{component} from 'react';
import Counter from "./Components/plusminus/Counter";
import User from "./Components/File/User";
import Counter1 from './Components/File/Counter1';


function App(){
    const names = [
        'Imaska',
        'Nita',
        'Elisha', 
        'Kirtee',
        'Trija', 
        'Ayushka',
        'Kritika'
    ];

    return <div className= "main">{names.map((name,index) => <Counter key = {name.concat(index)} name={name} />)}</div>;

}


export default App;

