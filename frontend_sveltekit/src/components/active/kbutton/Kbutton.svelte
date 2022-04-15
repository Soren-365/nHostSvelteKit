<script>
    import {Button, Heading} from "@kahi-ui/framework";

    let clicks = 0;

    function on_click(event) {
        clicks++;
    }
</script>

<Heading>
    Clicks: {clicks}
</Heading>

<Button on:click={on_click}>Add +1</Button>