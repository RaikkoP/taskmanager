import styles from '../styles/login.module.css';

export default function Login() {
    return (
        <main>
            <div className="h-screen flex items-center justify-center ">
                <div className="p-5 grid grid-cols-3 gap-4 container border-4 border-gray-50 rounded-3xl shadow-2xl ">
                    <div className="col-span-2 content-start">
                        <h1 className="text-5xl py-5 underline">Login</h1>
                        <form className="grid grid-rows-5 gap-4">
                            <label htmlFor="username">Username</label>
                            <input className={styles.formInput} type="text" id="username" name="username" placeholder="Username"></input>
                            <label htmlFor="password">Password</label>
                            <input className={styles.formInput} type="password" id="password" name="password" placeholder="************"></input>
                            <button className={styles.formButton} type="submit">Login</button>
                        </form>
                    </div>
                    <div className="content-center self-center">
                        <button className={styles.registerButton}>Register</button>
                        <button className="p-3">Continue as Guest</button>
                    </div>
                </div>
            </div>
        </main>
    )
}