<script>
    import Hamburg from "../hamburg.svelte";
    import { auth } from '../../firebase.js';
    import { sendPasswordResetEmail } from 'firebase/auth';
    import { goto } from '$app/navigation';

    let email = "";
    let message = "";

    const handleSubmit = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            message = "Password reset link sent! Please check your email.";
        } catch (error) {
            console.error("Error sending reset email:", error);
            message = "Failed to send reset email. Please try again.";
        }
    };
</script>

<div class="container">
    <h1 class="heading">Forgot Password</h1>
    <form class="login-form" on:submit|preventDefault={handleSubmit}>
        <div class="input-group">
            <input 
                type="email" 
                bind:value={email} 
                placeholder="Email" 
                class="form-input"
                required
            />
        </div>

        <button type="submit" class="login-button">
            Send Reset Link
        </button>
    </form>

    {#if message}
        <p class="message">{message}</p>
    {/if}

    <p class="signup-text">
        Don't have an account? 
        <a href="/signup" class="signup-link">Sign up now!</a>
    </p>
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

    .message {
        color: green;
        font-size: 1rem;
        text-align: center;
        margin-top: 1rem;
    }

    .signup-text {
        margin-top: 1.5rem;
        color: #333;
        font-size: 0.9rem;
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
