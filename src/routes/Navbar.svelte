<script>
    import NavLink from "./NavLink.svelte";
    import NavbarButton from "./SlideLink.svelte";
    import SlideButton from "./SlideButton.svelte";
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aladin&family=Mountains+of+Christmas:wght@400;700&family=Paprika&display=swap" rel="stylesheet">

<div class="header">
    <img src="headergirl.png" alt="head" class="headgirl"/>
    <nav class="navbar">
        <div class="nav-links">
            <div class="main-title">
                <NavLink link="/" text="Yuvati" />
            </div>            
            <NavLink link="/Health"/>
            <NavLink link="/Updates"/>
            <div class="otherlinks">
                <NavLink link="/Discover" text="Discover" />
                <NavLink link="/signin" text="Sign in" />
                <NavLink link="/connect" text="Connect" />
            </div>
        </div>
    </nav>
</div>

<style>
    .header {
        position: relative; /* Set relative to contain absolutely positioned navbar */
        width: 100%;
        height: 200px; /* Adjust height as needed */
    }

    .headgirl {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Adjusts the image to cover the container */
    }

    .navbar {
        position: absolute; /* Positions navbar on top of header */
        top: 20px; /* Adjust spacing from the top */
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px; /* Center content within navbar */
        margin: 0 auto;
        z-index: 1;
        font-size: larger;
        padding: 10px 20px; /* Add some padding for better spacing */
        border-radius: 8px; /* Optional: rounded corners */
    }

    .main-title {
        padding-top: 25px;
        font-family: "Paprika", system-ui;
        font-weight: 400;
        font-size: larger;
    }

    .otherlinks {
        padding-top: 26px;
        display: flex; 
        justify-content: space-around;
        gap: 2rem; 
    }

    .nav-links {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        white-space: nowrap;
    }

    .girl1 {
        display: flex;
        align-items: center;
    }

    .girl1 img {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
</style>
