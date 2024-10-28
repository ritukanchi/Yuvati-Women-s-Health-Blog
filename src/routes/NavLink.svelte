<script>
    export let link = "";
    export let text = "";

    // Function to handle navigation
    const navigateToCondition = (condition) => {
        window.location.href = `/health/${condition.toLowerCase()}`;
    }
</script>

<div class="header-container">
    <a href={link} class="header-link">{text}</a>
    {#if link === "/Health"}
        <div class="select" data-default="Select Condition">
            <div class="selected" data-default="Health Condition">
                Health Condition 
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5H7z" />
                </svg>
            </div>
            <div class="options">
                <a href="/Health/pcod" class="option">
                    <div class="option-content">PCOD</div>
                </a>
                <a href="/Health/diabetes" class="option">
                    <div class="option-content">Diabetes</div>
                </a>
                <a href="/Health/endometriosis" class="option">
                    <div class="option-content">Endometriosis</div>
                </a>
                <a href="/Health/pmdd" class="option">
                    <div class="option-content">PMDD</div>
                </a>
                <a href="/Health/mental-health" class="option">
                    <div class="option-content">Mental Health</div>
                </a>
            </div>
        </div>
    {/if}
    {#if link === "/Updates"}
    <div class="select" data-default="Select Condition">
        <div class="selected" data-default="Updates">
            Updates
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
            </svg>
        </div>
        <div class="options">
            <a href="/Discover/webinar" class="option">
                <div class="option-content">Webinar</div>
            </a>
            <a href="/Discover/upcomingevents" class="option">
                <div class="option-content">Upcoming Events</div>
            </a>
            <a href="/Discover/workshop" class="option">
                <div class="option-content">Workshop</div>
            </a>
        </div>
    </div>
{/if}
</div>

<style>
    :root {
        --linecolor: pink;
        --linewidth: 5px;
        --txtblack: black;
        --navbtn: transparent;
    }

    .header-container {
        display: inline-block;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 30px;
        gap: 90px;
    }

    .header-link {
        display: inline-block;
        align-items: center;
        position: relative;
        font-size: larger;
        z-index: 1;
        text-decoration: none;
        color: var(--txtblack);
        margin: 10px; 
        gap: 4rem; 
        transition: 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    /* Dropdown styles */
    .select {
        width: fit-content;
        cursor: pointer;
        position: relative;
    }

    .selected {
        padding: 5px;
        border-radius: 5px;
        font-size: larger;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgb(0, 0, 0);
    }

    .arrow {
        width: 25px;
        transform: rotate(-90deg);
        transition: 300ms;
    }

    .options {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        padding: 5px;
        border-radius: 5px;
        z-index: 1000;
        font-size: larger;
    }

    .select:hover .options {
        display: flex;
        font-size: larger;
    }

    .select:hover .arrow {
        transform: rotate(0deg);
    }

    .option {
        padding: 5px;
        color:palegoldenrod; 
        width: 150px;
        font-size: large;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
        display: block;
    }

    .option:hover {
        background-color:palegoldenrod;
    }

    .option-content {
        color: rgb(0, 0, 0);
        text-decoration: none;
        width: 100%;
        height: 100%;
    }
</style>