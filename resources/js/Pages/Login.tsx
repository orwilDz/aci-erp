import { UserLoginType } from "@/Types/user"
import { useForm, usePage } from "@inertiajs/react"

export default function Login() {
    const {data, setData, post, errors} = useForm<UserLoginType>({
        email: '',
        password: ''
    });

    const submitForm = function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        post('/login');
        console.log(errors);
    }

    return <main className="flex justify-center items-center" style={{ height: "100vh" }}>
        <div className="text-center">
            <img src="/images/logo.png" alt="Logo aci" width={126} className="inline" />
            <form className="bg-base-100 mt-5 p-10 rounded-2xl shadow-md flex-col flex gap-6" method="POST" action="/login">
                <div>
                    <input
                        type="text"
                        className="input border border-gray-300"
                        placeholder="Email"
                        value={data.email}
                        onChange={event => setData('email', event.target.value)}
                    />
                    {errors.email && <p className="mt-2 text-sm text-left text-error">{errors.email}</p>}
                </div>
                <div>
                    <input type="password"
                        placeholder="Mot de passe"
                        className="input border border-gray-300"
                        value={data.password}
                        onChange={event => setData('password', event.target.value)}
                    />
                    {errors.password && <p className="mt-2 text-sm text-left text-error">{errors.password}</p>}
                </div>

                <button className="btn btn-primary" onClick={submitForm }>Connexion</button>
                {errors[0] && <p className="mt-2 text-sm text-left text-error">{errors[0]}</p>}

            </form>
        </div>
    </main>
}
