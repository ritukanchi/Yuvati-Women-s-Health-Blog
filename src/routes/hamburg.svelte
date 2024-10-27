<script>
    import { createEventDispatcher } from "svelte";
    
    export let isOpen = false; 
    const dispatch = createEventDispatcher();
    const handleClick = () => {
        dispatch("toggle");
    };
</script>
<a href={link}> {text}</a>
<button 
    class="hamburger" 
    on:click={handleClick} 
    aria-label="Toggle navigation menu"
    aria-expanded={isOpen}
>
    <span class:open={isOpen}></span>
    <span class:open={isOpen}></span>
    <span class:open={isOpen}></span>
</button>

<style>
    .hamburger {
        display: flex;
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
        transform: translateY(10px) rotate(45deg);
    }

    .hamburger span.open:nth-child(2) {
        opacity: 0;
    }

    .hamburger span.open:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
    }
</style>
