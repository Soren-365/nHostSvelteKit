
<script>
   import HomeButton from '../components/active/myButton/HomeButton.svelte';

</script>
<main>
    <div class="container">
<h1>Values</h1>
<HomeButton/>
</div>
</main>
<style>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

    main {
        text-align: center;
       
        max-width: 800px;
        margin: 0 auto;
        width: 100%;
    }
	.container {
		width: 480px;
		margin: 0 auto;
	}
    
    h1 {
    margin: 70px;
}

    @media only screen and (max-width: 600px) {
    main {
    text-align: center;
    
    max-width: 320px;
    margin: 0 auto;
    }
    }
    </style>