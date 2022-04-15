<script>
    import './coffee-mug.js';
const oldRegister = customElements.define;
customElements.define = function(name, constructor, options) {
    if (!customElements.get(name)) {
        oldRegister(name, constructor, options);
    }
}


let name = 'world';
</script>

<p>
👇 This is a coffee-mug custom element.
</p>
<coffee-mug class="mug" size="large"></coffee-mug>

<hr />
<p>
In the Svelte component, you write
</p>
<pre>{'<coffee-mug class="mug" size="large"></coffee-mug>'}</pre>
<p>
But in the DOM inspector, you only see the class attribute, since size was set as a property
</p>
<pre>{'<coffee-mug class="mug"></coffee-mug>'}</pre>