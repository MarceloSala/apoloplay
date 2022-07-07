import './estilo.registros.css';

export const Register = () => {
    return (
        <div class="sign-up-form">
			<h1> Sign Up Now</h1>
	        <form>
				<input type="email" name="input-box" placeholder="Your Email">
				<input type="password" name="input-box" placeholder="Your Password">
				<p><span><input type="checkbox"></span>I Agree to the Term of Services</p>
				<button type="button" class="signup-btn">Register</button>
				<hr>
				<p class="OR">OR</p>
				<button type="button" class="login-btn">Login</button>
				<p>Already have an account? <a href="#">Login</a></p>

	         </form>
        </div>
    )
}
export default Register;