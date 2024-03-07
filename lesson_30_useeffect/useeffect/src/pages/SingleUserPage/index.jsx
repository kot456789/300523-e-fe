import React, { useEffect, useState} from 'react'
import { getSingleUser } from '../../requests/users';
import { useParams } from 'react-router-dom';
import s from './index.module.css'


export default function SingleUserPage() {


  const [ singleUser, setSingleUser ] = useState({});

  const { user_id } = useParams();

  useEffect(() => getSingleUser(user_id, setSingleUser), []);

  const { image, title, firstName, lastName, age, password, phone } = singleUser
 
  return (
    <div className={s.single_user}>
      <img src={image} alt={title} />
      <div>
         <p>Firstname: { firstName }</p>
         <p>Lastname: { lastName }</p>
         <p>Age: { age }</p>
         <p>Password: { password }</p>
         <p>Phone number: {phone }</p>       
        <div>back</div>  
      </div>
    </div>
  )
}
