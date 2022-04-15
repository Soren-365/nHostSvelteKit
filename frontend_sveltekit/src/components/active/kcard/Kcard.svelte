<script>
    import {
        Button,
        Card,
        Text,
    } from "@kahi-ui/framework";
</script>

<Card.Container class="getting-started-patterns"  >
    <Card.Figure>
        <img src={"/animals/lynx.jpg"} alt="lynx"/>
    </Card.Figure>

    <Card.Header>Lorem Ipsum</Card.Header>

    <Card.Section>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Card.Section>

    <Card.Footer>
        <Button palette="affirmative">
            Open Details
        </Button>
    </Card.Footer>
</Card.Container>

<style>
    :global(.getting-started-patterns) {
        max-width: 35ch;
    }
</style>