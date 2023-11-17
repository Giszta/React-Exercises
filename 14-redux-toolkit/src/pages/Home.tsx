import { useDispatch, useSelector } from "react-redux"


export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username)

    return (<h1>Hello {username} on my Home Page</h1>)
}