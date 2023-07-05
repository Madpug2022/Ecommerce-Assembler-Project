import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import '../styles/components/Register.styles.css'
const EMAIL_REGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const url: string = 'http://localhost:3000/users';
function Register(props: any){
    const userRef = useRef<any>();
    const userErrRef = useRef<any>();

    const [email, setEmail] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPsw] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [sucess, setSucess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidName(result);
    }, [email]);

    useEffect(() => {
        const result = PASS_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd, matchPwd]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const validate1 = EMAIL_REGEX.test(email);
        const validate2 = PASS_REGEX.test(pwd);
        if (!validate1 || !validate2) {
            setErrMsg("Invalid Entry");
            return;
        }

        try{
            const token = uuidv4();
            const response = await fetch((url), {
            method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ token, email, pwd })})
        console.log(JSON.stringify(response));
        setSucess(true);
        } catch (error){
            console.log(error);
        }
    }

    return (
        <>
        {sucess ? ( <><div className="modal-body">
                    <h1>Sucess, please log in</h1>
        </div>
        <div className="modal-footer">
            <button onClick={() => props.onFormSwitch('login')}>¿Already a member? Log In here</button>
        </div></>) : ( <>
        <div className="modal-body">
            <p ref={userErrRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className='log-in' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                required
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                onChange={(e) => setEmail(e.target.value)}
                ref={userRef}
                autoComplete="off"
                value={email}
                type="email"
                className="login-input"
                id="email"
                placeholder="Email"
                />
                <p id="uidnote" className={userFocus && email && !validName ? "instructions" : "offscreen"}>
                    Enter a valid Email
                </p>
                <label htmlFor="password">Password</label>
                <input
                value={pwd}
                type="password"
                className="login-input"
                id="password"
                required
                onChange={(e) => { setPsw(e.target.value);}}
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={()=> setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                placeholder="********" />
                <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
                    Enter a valid Password.<br/>
                    Mut be 8 characters long and <br/>
                    contain uppercase, lowercase and numbers.
                </p>
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                type="password"
                className="login-input"
                id="confirmpassword"
                placeholder="********"
                onChange={(e)=>{setMatchPwd(e.target.value)}}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={()=>{setMatchFocus(true)}}
                onBlur={()=>{setMatchFocus(false)}}
                />
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    Password must match
                </p>
                <button disabled={!validName || !validPwd || !validMatch ? true : false} type="submit">Register</button>
            </form>
        </div>
        <div className="modal-footer">
            <button onClick={() => props.onFormSwitch('login')}>¿Already a member? Log In here</button>
        </div> </> )}
        </>
        )
}
export default Register
