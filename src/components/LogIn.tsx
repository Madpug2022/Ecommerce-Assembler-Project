import { useEffect, useState, useContext, useRef } from "react"
import { ShopContext } from "../context/ShopContext";
function LogIn(props: any){
    const shopContext = useContext(ShopContext);

    if(!shopContext) {
        return null;
    }
    const { updateButtonText, closeModal, userList, setUserList, handleLoged, setIsLoged } = shopContext;

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                const response = await fetch('http://localhost:3000/users');
                if (!response) throw new Error("UserDB error");
                const data = await response.json();
                setUserList(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers();
    }, []);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const userErrRef = useRef<any>();
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const currentUser = {
            email: user.email,
            password: user.password
        }
        const foundUser = userList.find(obj => {
            return obj.email === currentUser.email && obj.password === currentUser.password;
        })
        if(foundUser) {
            updateButtonText(currentUser.email)
            window.localStorage.setItem('token', JSON.stringify(foundUser.token));
            window.localStorage.setItem('isLoged', JSON.stringify(true))
            window.localStorage.setItem('loged user', JSON.stringify(foundUser.email));
            handleLoged(foundUser)
            setIsLoged(true);
            closeModal();

        } else {
            setErrMsg('User not found')
        }
    };
    return (
        <>
        <div className="modal-body">
        <p ref={userErrRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className='log-in' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type="email" className="login-input" id="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type="password" className="login-input" id="password" placeholder="********" />
                <button type="submit">Log in</button>
            </form>
        </div>
        <div className="modal-footer">
            <button onClick={() => props.onFormSwitch('register')}>¿Don't have an account? Register here</button>
        </div>
        </>
    )
}
export default LogIn
