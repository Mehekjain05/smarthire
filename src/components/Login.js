import { useState } from 'react';

const Login = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="flex flex-col relative w-96 5-96 bg-gray-100 mt-44 border-2">
            <div className="flex">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Tab 1
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Tab 2
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <div>
                        <h1>Login Form</h1>
                        <div >
                            <hr />
                            <div >
                                <label for="uname"><strong>Username</strong></label>
                                <input type="text" placeholder="Enter Username" name="uname" required />
                                <label for="psw"><strong>Password</strong></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />
                            </div>
                            <button type="submit">Login</button>
                            <div style="background-color: #eee">
                                <label style="padding-left: 15px">
                                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                                </label>
                                <span class="psw"><a href="#"> Forgot password?</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Login