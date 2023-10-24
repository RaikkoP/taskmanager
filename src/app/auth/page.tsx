import styles from '../styles/auth.module.css';


export default function Auth() {
    
    return (
        <main>
            <div className="overflow-hidden mt-12 h-screen flex items-center justify-center grid grid-rows-2">
                <div className="max-w-lg tracking-wider text-center">
                    <h2 className="text-5xl font-bold mb-24">Authentication</h2>
                    <h3 className="text-2xl">If you wish to save your data online please
                        login or make a new account. <span className="text-red-500">Otherwise data will be
                            saved into local storage!</span>
                    </h3>
                </div>
                <div>
                    <div className=" flex justify-center">
                        <button className={styles.authenticationButton}>Login</button>
                        <button className={styles.authenticationButton}>Register</button>
                    </div>
                    <div className="mt-8 text-center underline">
                        <a><p>Continue as Guest</p></a>
                    </div>
                </div>
            </div>
        </main>
    )
}