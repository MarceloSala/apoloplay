import './estilogin.css';

export const Login = () => {
    return (
        <section className="forma-login">
        <h1>¡Bienvenido!</h1>
        <input className="cajatexto" type="email" name ="correo" id="correo" placeholder="Correo" />
        <input className="cajatexto" type="password" name ="contraseña" id="contraseña" placeholder="Contraseña" />
        <input className="boton_login" type="submit" value="Ingresar"/>
        <p>¿No tienes cuenta? <a href="#">Registrate</a></p>
    </section>
    )
}
export default Login;