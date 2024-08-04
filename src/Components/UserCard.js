import React, {useState} from 'react';

const UserCard = ({user,onDelete,setUsersList,usersList})=>{
    const [isEdit, setEdit] = useState(false);
    const [userState, setUserState] = useState(user)
    const handleEdit = () => {
        if (!isEdit){
            setEdit(true);
        }else{
            const newData={
                ...user,
                name: userState.name,
                city:userState.city,
            }
            setUsersList(usersList.map(el => el.id === user.id ? newData : el))
            setEdit(false)
        }
    }
    return (
        <div className="card-wrapper">
            <div>
                <h4>
                    Name:
                </h4>
                {
                    !isEdit?
                        <span>{user.name}</span>
                        :
                        <input onChange={(e) =>
                            setUserState({
                            ...userState,
                            name: e.target.value,
                        })
                        }
                               defaultValue={user.name}
                               type="text"/>
                }


            </div>
            <div>
                <h4>
                    City:
                </h4>
                {
                    !isEdit ?
                        <span>{user.city}</span>
                        :
                        <input
                            onChange={(e) => setUserState({
                                ...userState,
                                city:e.target.value,
                            })}
                            defaultValue={user.city}
                               type="text"/>
                }


            </div>
            <div className="btn-wrapper">
                <button className="btn btn-danger" onClick={() => onDelete(user.id)}>Delete</button>
                <button className="btn btn-outline-info"
                        onClick={handleEdit}>
                    {
                        isEdit ? 'Save' : 'Edit'
                    }
                </button>
            </div>

        </div>
    );
}

export default UserCard;