import NavBar from "./navBar";
import {useEffect, useState} from "react";
import axios from 'axios';
import '../style/register.scss';


const Register = () => {

    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);

    const [users, setUsers] = useState([]);

    function fetchUsers () {
        axios.get('http://127.0.0.1:3001/users').then((response) => {
            setUsers(response.data);
            console.log(response.data);
        });
    }


    useEffect(() => {
        fetchUsers();
    }, []);

    async function onRegClickHandler() {
        const user = {name, surname};
        console.log(user);
        await axios.post('http://127.0.0.1:3001/users', user);
        fetchUsers();
    }

    function onNameChangeHandler(e) {
        setName(e.target.value);
    }

    function onSurnameChangeHandler(e) {
        setSurname(e.target.value);
    }

    function onListClickHandler() {
        fetchUsers();
    }

    async function onDeleteClick(id) {
        await axios.delete('http://127.0.0.1:3001/users/' + id );
        fetchUsers();
    }

    async function onUpdateClick(id) {
        if(name != null || surname != null) {
            const user = {name, surname};
            await axios.put('http://127.0.0.1:3001/users/' + id, user);
        }
        fetchUsers();
    }

    return (
        <>
            <NavBar />

            <div>
                <button type="button" name="listUserButton" onClick={onListClickHandler}>List Users</button>
            </div>
            <hr/>
            <div>
                <input type="text" name="name" placeholder="Enter your name..." onChange={onNameChangeHandler}/>
                <input type="text" name="surname" placeholder="Enter your surname..." onChange={onSurnameChangeHandler}/>
                <button type="button" name="regButton" onClick={onRegClickHandler}>Register</button>
            </div>

            <div className="users">
                {users.map((user) => {
                    return (
                        <div key={user.id} className="userInfo">
                            <input type="text" defaultValue={user.name} onChange={onNameChangeHandler}/>
                            <input type="text" defaultValue={user.surname} onChange={onSurnameChangeHandler}/>
                            <button type="text" onClick={() => onDeleteClick(user.id)}>Sil</button>
                            <button type="text" onClick={() => onUpdateClick(user.id)}>Düzenle</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Register;