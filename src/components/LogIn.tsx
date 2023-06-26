function LogIn(props: any){
    return (
        <>
        <div className="modal-body">
            <form className='log-in'>
                <label htmlFor="email">Email</label>
                <input type="email" className="login-input" id="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input type="password" className="login-input" id="password" placeholder="********" />
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
