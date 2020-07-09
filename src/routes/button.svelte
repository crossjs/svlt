<svelte:head>
	<title>Button</title>
</svelte:head>

<h1>Button component</h1>

<p>This is the 'button' page.</p>

<label>
  <input type="checkbox" bind:checked={disabled} /> disable all
</label>

<h2>Sizes</h2>

<p>
  <Button small {disabled}>small</Button>
  <Button {disabled}>default</Button>
  <Button large {disabled}>large</Button>
</p>

<h2>Colors</h2>

<p>
  <Button {disabled}>default</Button>
  <Button primary {disabled}>primary</Button>
  <Button secondary {disabled}>secondary</Button>
  <Button error {disabled}>error</Button>
  <Button warning {disabled}>warning</Button>
  <Button info {disabled}>info</Button>
  <Button success {disabled}>success</Button>
</p>

<h2>Variants</h2>

<p>
  <Button {disabled}>default</Button>
  <Button contained {disabled}>contained</Button>
  <Button outlined {disabled}>outlined</Button>
</p>

<p>
  <Button primary {disabled}>default</Button>
  <Button primary contained {disabled}>contained</Button>
  <Button primary outlined {disabled}>outlined</Button>
</p>

<p>
  <Button secondary {disabled}>default</Button>
  <Button secondary contained {disabled}>contained</Button>
  <Button secondary outlined {disabled}>outlined</Button>
</p>

<h2>Events</h2>

<p>
  <Button on:click={() => clicks++} {disabled}>clicks: {clicks}</Button>
  <Button on:click|once={() => clicks++} {disabled}>clicks: {clicks}</Button>
</p>

<h2>Styles</h2>

<p>
  <Button style="--color: yellowgreen" {disabled}>yellowgreen</Button>
</p>

<h2>Nested</h2>

<p>
  <Button outlined {disabled}><Button contained {disabled}>nested</Button></Button>
</p>

<script lang="typescript">
  import Button from '../components/Button.svelte';

  let clicks: number = 0;
  let disabled: boolean = false;
</script>
