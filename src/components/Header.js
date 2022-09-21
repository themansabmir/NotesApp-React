import React from 'react';

const Header = ({dark}) => {
    return (
        <div className='header'> 
        <h1>Notes App</h1>
        <button className='save'  onClick={()=>
      dark((previous)=> !previous)
        } > Toggle Mode</button>


        </div>
    )
}

export default Header;
