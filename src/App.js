import './App.css';
import React from 'react';

const styles = {
color : 'purple',
padding: 10,
margin: 10,

}
function Button(props) {
return <button style={{...props.style, fontSize: props.textSize}}>{props.children}</button>
}

function App() {
  return(
    <div className='App'>
      <header className='App-header'>
        <img src= "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/141880657_906281550176027_3750175604558733234_n.jpg?stp=dst-jpg_s552x414&_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=zTaTThY3qPcAX-Dr59A&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCuyKgLtg0VjekS5PcisA6n9SLtCaCRMsYZchTXgg-05A&oe=638A1631"/>
        <h1>Projet JSX</h1>
        <h2>Eya Ben Jaouahdou</h2>
        <p>Adresse: <code>eyajaouahdou@</code>gmail.com</p>
        <a 
        className='App-link'>
          welcome
        </a>
        <Button style={styles} textSize={20}>Click Me!</Button>
        <Button style={styles}>Login</Button>

      </header>

    </div>
  )
}

export default App;
