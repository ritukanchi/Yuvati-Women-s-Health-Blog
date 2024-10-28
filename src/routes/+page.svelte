<script>
    import Navbar from "./Navbar.svelte"; 
    import Card from "./Card.svelte";
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aladin&family=Mountains+of+Christmas:wght@400;700&display=swap" rel="stylesheet">

<div class="main">
    <div class="left-article">
        <div class="heading">
            <h1>CAUTION!</h1>
        </div>
        <div class="image-container">
            <img src="laptop.png" alt="Description of image" class="my-image" />
        </div>
    </div>
    <div class="right-article">
        <div class="head-1">
            <h1>Catch up on the Latest Article!</h1>
        </div>
        <div class="head-2">
            <h2>Don't panic about lead in tampons!</h2>
        </div>
        <div class="head-3">
            <h2>Meftal spas is totally safe</h2>
        </div>
    </div>
</div>

<style>
    .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        padding-top: 0;
        gap: 20px; /* Small gap to avoid elements sticking together */
    }

    .left-article {
        width: 48%; /* Set both articles to take up nearly equal space */
    }

    .heading {
        width: 100%;
        padding: 10px;
    }

    .image-container {
        padding: 10px;
        margin-top: -90px;
    }

    .my-image {
        width: 100%;
        border-radius: 8px;
    }

    .right-article .head-1 {
        background-color: palegoldenrod;
        font-size: large;
        width: 350px;
        padding: 10px;
        padding-right: 0px;
        justify-content: center;
        align-items: center;
    }

    .head-2, .head-3 {
        padding: 20px;
        text-align: center;
    }
</style>
