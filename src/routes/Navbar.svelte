<script>
    import NavLink from "./NavLink.svelte";
    import Hamburg from "./hamburg.svelte";
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };
</script>

<div class="nav-container">
    <nav class="navbar">
        <button 
            class="hamburger" 
            on:click={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
        >
            <span class:open={isMenuOpen}></span>
            <span class:open={isMenuOpen}></span>
            <span class:open={isMenuOpen}></span>
        </button>
        
        <div class="nav-links" class:menu-open={isMenuOpen}>
            <NavLink link="/" text="Yuvati" />
            <NavLink link="/Health" text="Health Condition" />
            <NavLink link="/Discover" text="Discover" />
            <NavLink link="/Updates" text="Updates" />
            <NavLink link="/signin" text="Sign in" />
            <NavLink link="/connect" text="Connect" />
        </div>
    </nav>
    <div class="curve"></div>
</div>

<style>
   .nav-container {
        background-color: #FFB6B6; 
        position: relative;
        width: 100%;
        padding-bottom: 50px; 
    }

    .curve {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 90px;
        background-color: #FFB6B6; 
        clip-path: path(
            "M 0 100 Q 15 60, 25 80
            T 35 100
            Q 50 50, 75 90
            T 100 75 V 100 H 0 Z"
        );
    }
    .navbar {
        display: flex;
        align-items: center;
        padding: 1rem;
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
    }

    .hamburger {
        display: left; 
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 24px;
        flex-direction: column;
        justify-content: space-between;
        z-index: 20;
    }

    .hamburger span {
        display: block;
        width: 100%;
        height: 3px;
        background-color: #000;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
    }

    .hamburger span.open:nth-child(1) {
        transform: translateY(10px) rotate(35deg);
    }

    .hamburger span.open:nth-child(2) {
        opacity: 0;
    }

    .hamburger span.open:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
    }

    .nav-links {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        width: 100%;
        justify-content: flex-end;
    }

    /* Mobile styles */
    @media (max-width: 768px) {
        .hamburger {
            display: flex; 
        }

        .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #FFB6B6;
            flex-direction: column;
            align-items: center;
            padding: 4rem 2rem;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            z-index: 10;
        }

        .nav-links.menu-open {
            transform: translateX(0);
        }
    }
</style>