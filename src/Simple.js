import React from 'react';

const Greet = () => {

    class Player {
        constructor(name, type) {
            this.name = name;
            this.type = type;
        }

       

    }

    const kixstorm = new Player('kixstorm86', 'Gunner');

    
    return (

        
        <div>
          
        
            <h1>{kixstorm.name}</h1>
            <p>{kixstorm.type}</p>
        </div>
    );
}

export default Greet;