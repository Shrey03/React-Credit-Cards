// Author - Shrey Patel
import logo from './logo.svg';
import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import '../node_modules/react-credit-cards/es/styles-compiled.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

const [number , setNumber] = useState('')
const [name , setName] = useState('')
const [expiry , setExpiry] = useState('')
const [cvc , setCvc] = useState('')
const [postal , setPostal] = useState('')
const [focus , setFocus] = useState('')

    return ( 
    <div className = "App" >
        <Cards 
        number = {number}
        name = {name}
        expiry = {expiry}
        cvc = {cvc}
        postal = {postal} 
        focused = {focus}
        />
            
   <h1 className="header">Credit Card Validation</h1>    
<form className="form-row">
    <div className="form-group col-md-6">
    <label>
        Card Number :
        <input 
type="tel"
name="number"
placeholder={"Enter Card Number"}
value={number}
maxLength="16"
onChange={e => setNumber(e.target.value)}
onFocus={e => setFocus(e.target.name)} />
        </label> 
    </div>
   

    <div className="form-group col-md-6">
    <label>
        Name :
<input 
type="text"
name="name"
placeholder={"Enter Name"}
value={name}

onChange={e => setName(e.target.value)}
onFocus={e => setFocus(e.target.name)}/>
</label>
</div>
<div className="form-group col-md-6">
    <label>
        Expiry Date :

<input 
type="text"
name="expiry"
placeholder="MM/YY Expiry Date"
value={expiry}
maxLength="4"
onChange={e => setExpiry(e.target.value)}
onFocus={e => setFocus(e.target.name)}/>
</label>
</div>
<div className="form-group col-md-6">
    <label>
        CVC :
<input 
type="tel"
name="cvc"
placeholder="3 digit CVC"
value={cvc}
onChange={e => setCvc(e.target.value)}
onFocus={e => setFocus(e.target.name)}/>
</label>
</div>
<div className="form-group col-md-6">
    <label>
       Postal Code :
<input 
type="text"
name="postal"
placeholder="Enter Postal Code"
value={postal}
onChange={e => setPostal(e.target.value)}
onFocus={e => setFocus(e.target.name)}/>
</label>
</div>
</form>


        </div>
    );
}

export default App;