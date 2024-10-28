<script>
    import { auth } from '../../firebase.js';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { goto } from '$app/navigation';

    let email = "";
    let password = "";
    
    const handleSubmit = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;  
            console.log('User signed in:', user);
            goto('/');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing in:', errorCode, errorMessage);
            if (errorCode === 'auth/wrong-password') {
                error = 'The password is incorrect. Please try again.';
            } else if (errorCode === 'auth/user-not-found') {
            error = 'No user found with this email. Please sign up.';
            } else {
            error = errorMessage; 
      }
        }
    };
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aladin&family=Mountains+of+Christmas:wght@400;700&display=swap" rel="stylesheet">

<div class="container">
    <h1 class="heading">Sign In</h1>
    <form class="login-form" on:submit|preventDefault={handleSubmit}>
        <div class="input-group">
            <input 
                type="email" 
                bind:value={email} 
                placeholder="Email" 
                class="form-input"
            />
        </div>
        
        <div class="input-group">
            <input 
                type="password" 
                bind:value={password} 
                placeholder="Password"
                class="form-input"
            />
            <a href="/forgot-password" class="forgot-link">Forgot Password?</a>
        </div>

        <button type="submit" class="login-button">
            Sign In
        </button>
    </form>
    <div class="signup">
        <p class="signup-text">
            Don't have an account? 
            <a href="/signup" class="signup-link">Sign up now!</a>
        </p>
    </div>
</div>

<style>
    .heading {
        color: #333;
        font-size: 2rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
        text-align: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        max-width: 400px;
        margin: 0 auto;
    }

    .login-form {
        background-color: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .input-group {
        display: flex;
        width: 90%;
        flex-direction: column;
        gap: 0.5rem;
    }

    .form-input {
        padding: 0.8rem 1.2rem;
        border: 2px solid #e0e0e0;
        border-radius: 25px;
        font-size: 1rem;
        width: 100%;
        background-color: transparent;
        transition: border-color 0.3s ease;
    }

    .form-input:focus {
        outline: none;
        border-color: #4a90e2;
    }

    .forgot-link {
        font-size: 0.8rem;
        color: #666;
        text-decoration: none;
        text-align: right;
        margin-top: 0.25rem;
    }
    .signup {
        font-family: "Mountains of Christmas", serif;
        font-weight: 700;
        font-style: normal;
        font-size: large;
    }
    .login-button {
        background-color: #4a90e2;
        color: white;
        border: none;
        border-radius: 25px;
        padding: 0.8rem;
        font-size: 1.1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        width: 100%;
        margin-top: 1rem;
    }

    .login-button:hover {
        background-color: #357abd;
    }

    .signup-text {
        margin-top: 1.5rem;
        color: #333;
        font-size: 0.9rem;
        font-size: large;
    }

    .signup-link {
        color: #4a90e2;
        text-decoration: none;
        font-weight: bold;
    }

    .signup-link:hover {
        text-decoration: underline;
    }
</style>