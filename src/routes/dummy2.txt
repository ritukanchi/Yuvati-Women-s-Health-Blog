<script>
    export let link = "";
    export let text = "";
</script>

<div class="header-container">
    <a href={link} class="header-link">{text}</a>
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
        justify-content:space-around;
        align-items:center;
        padding: 10px;
        gap: 90px; 
    }

    .header-link {
        padding: 10px;
        background-color: rgba(0, 0, 0, 0);
        display: inline-block;
        position: relative;
        z-index: 1;
        text-decoration: none;
        color: var(--txtblack);
        margin: 0 10px;
        transition: 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        transition-delay: 0s !important;
    }

    .header-link::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        box-shadow: 0px 0px 0px 0px var(--linecolor);
        background: var(--navbtn);
        z-index: -1;
        transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    .header-link:hover::before {
        width: 100%;
        left: unset;
        right: 0;
    }

    .header-link:hover {
        box-shadow: 0px var(--linewidth) 0px 0px var(--linecolor);
    }
</style>
