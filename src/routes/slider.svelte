<svelte:head>
	<title>Slider</title>
</svelte:head>

<h1>Slider component</h1>

<p>This is the 'slider' page.</p>

<label>
  <input type="checkbox" bind:checked={disabled} /> disable all
</label>

<h2>Sizes</h2>

<p>
  <Slider small bind:value {disabled} />
  <Slider bind:value {disabled} />
  <Slider large bind:value {disabled} />
</p>

<h2>Colors</h2>

<p>
  <Slider bind:value {disabled} />
  <Slider primary bind:value {disabled} />
  <Slider secondary bind:value {disabled} />
  <Slider error bind:value {disabled} />
  <Slider warning bind:value {disabled} />
  <Slider info bind:value {disabled} />
  <Slider success bind:value {disabled} />
</p>

<h2>Value</h2>

{value}

<p>
  <Slider step={0.01} bind:value {disabled} />
  <Slider step={0.1} bind:value {disabled} />
  <Slider step={1} bind:value {disabled} />
  <Slider step={10} bind:value {disabled} />
</p>

<h2>Vertical</h2>

<p style="height: 200px; display: flex">
  <Slider vertical step={0.01} bind:value {disabled} />
  <Slider vertical step={0.1} bind:value {disabled} />
  <Slider vertical step={1} bind:value {disabled} />
  <Slider vertical step={10} bind:value {disabled} />
</p>

<script lang="typescript">
  import Slider from '../components/Slider.svelte';
  let value: number = 50;
  let disabled: boolean = false;
</script>
