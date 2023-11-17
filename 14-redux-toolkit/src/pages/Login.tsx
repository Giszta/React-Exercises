import { useState } from "react"
import { login, logout } from "../store"
import { useDispatch, useSelector } from "react-redux"

export const Login = () => {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();

    const username = useSelector((state: any) => state.user.value.username)

    return (
        <div>
            <h1>{username}</h1>
            <input onChange={(e) => { setNewUsername(e.target.value) }} />
            <button onClick={() => dispatch(login({ username: newUsername }))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    );
}