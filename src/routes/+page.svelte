<script>
    import Navbar from "./Navbar.svelte"; 
    import Card from "./Card.svelte";
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aladin&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Mountains+of+Christmas:wght@400;700&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Paprika&family=Playpen+Sans:wght@100..800&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap" rel="stylesheet">
<div class="main">
    <div class="left-article">
        <div class="heading">
            <h1>CAUTION!!</h1>
        </div>
        <div class="image-container">
            <img src="laptop.png" alt="Description of image" class="my-image" />
        </div>
        <div class="caption">
            <h5>Caution heat from electronic devices causing fertility!</h5>
        </div>
    </div>
    <div class="right-article">
        <div class="head-1">
            <h1>Catch up on the Latest Article!</h1>
        </div>
        <div class="head-2">
            <div class="tampon">
                <img src="tampon.png" alt="tamp">
            </div>
            <div class="overlay">
                <h2>Don't panic about lead in tampons!</h2>
            </div>
        </div>
        <div class="head-3">
            <div class="meft">
                <img src="meftal.png" alt="mef">
            </div>
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
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;

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
        padding-bottom: -10px;
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
    .caption{
        width: 100%;
        font-size: 30px;
        padding-left: 10px;
        padding-top: -10px;
    }
    .head-2, .head-3 {
        padding: 20px;
        text-align: center;
    }
    .tampon{
        width: 100px;
        height: 10px;
    }
    .tampon img{
        opacity: 0.5;
    }
    .meft img{
        opacity: 0.5;
        padding-right: 15px;
    }
    .overlay{
        position: relative;
    }
</style>
