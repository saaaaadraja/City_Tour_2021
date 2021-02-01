import  React,{useState} from 'react';
import './data.css';
import {data} from './data';


export const Tour=()=>{
   
const [people,setPeople]=useState(data);
const handleRemove=(id)=>{
const newArray=people.filter((person)=>id!==person.id);
setPeople(newArray);
}
    return (
        <>
        <section  className='list' >
            {
                people.map((person)=>{
                    const {name,id,description,info}=person;
                    return ( <article className='item' key={id}>
                    <img  src={person.image} alt={name}/> 
                        <h3>{name}</h3>
                        <h4>{description}</h4>
                        <p>{info}</p>
                        <button onClick={()=>{handleRemove(id)}} >Remove</button>
                    </article> );
                })
            }
        </section>
        </>
    );}



