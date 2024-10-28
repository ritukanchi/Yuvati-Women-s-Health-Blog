<script>
    import Navbar from "./Navbar.svelte"; 
    import Card from "./Card.svelte";
</script>


<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>

<div class ="main">
    <div class = "left-article">
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
        <div class ="head-2">
            <h2>don't panic about lead in tampons!</h2>
        </div>
        <div class="head-3">
            <h2>Meftal spas is totally safe</h2>
        </div>
    </div>
</div>
<style>
    .main{
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        padding: 60px;
        gap:900px;
    }
    .left-article{
        display:block;
        justify-content: left;
        align-items: top;
    }
    .heading{
        display:baseline;
        justify-content: left;
        align-items: top;
        width: 100%;
        padding: 10px; 
        margin: 0px; 
    }
    .image-container{
        padding: 10px; 
        margin-top: -90px;
    }
    .my-image {
        width: 250%;
        border-radius: 8px;
    }
    .right-article{
        display: inline;
        justify-content: right;
        align-items: right;
        padding: 10px;
        width:-400px; 
    }
    .head-1{
        background-color: palegoldenrod;
        padding: 20px; 
    }
    .head-2{
        padding: 20px;
        justify-content: center;
        align-items: center;
    }
    .head-3{
        padding: 20px; 
        justify-content: center;
        align-items: center;
    }
</style>