import React, {useEffect, useState} from 'react';
import UserCard from "./Components/UserCard";


const App=()=> {
    const [usersList,setUsersList]=useState(users);
    const[user,setUser]=useState({
        name:'',
        city:'',
    });
    const handleDelete=(id)=>{
        setUsersList(usersList.filter(user=>user.id !== id));
    }
    useEffect(() => {
        setUsersList(users)
    },[])

    const handleAddUser = () => {
    setUsersList([...usersList,
        {
            id:Math.ceil(Math.random()*100),
            name:user.name,
            city:user.city,
        }])
        setUser({
            name:'',
            city:'',
        })
    }
  return (
    <div className="wrapper">
        <div className="field-wrapper">
            <div>
                <input
                    value={user.name}
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setUser({...user,name: e.target.value})}
                />

            </div>
            <div>
                <input
                    value={user.city}
                    type="text"
                    placeholder="City"
                    onChange={(e) => setUser({...user,city:e.target.value})}/>

            </div>
            <button className={"btn btn-outline-success"} onClick={handleAddUser}>Add</button>
        </div>

            {

                usersList.map(user =>
                    <UserCard
                        onDelete={handleDelete}
                        key={user.id}
                        user={user}
                        setUsersList={setUsersList}
                        usersList={usersList}
                    />
                )

            }

    </div>
  );
}

export default App;

const users=[
    {
        id: 1,
        name: 'John Doe',
        city:'NY'
    },
    {
        id: 2,
        name: 'John Doe',
        city:'Milan'
    },
    {
        id: 3,
        name: 'John Doe',
        city:'Bishkek'
    },
    {
        id: 4,
        name: 'John Doe',
        city:'France'
    },
    {
        id: 5,
        name: 'John Doe',
        city:'Tokyo'
    }
]
