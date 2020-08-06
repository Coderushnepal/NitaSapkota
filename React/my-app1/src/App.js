import React, { useReducer } from 'react';
import './App.css';
import{EnhancedUsers} from './project';



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

    return(
        <div>
            {names.map((names) => (
                <EnhancedUsers key ={names} names={names} />
            ))}
        </div>
    );

   

}


export default App;