<script lang="typescript">
  import { draggable } from './dnd';

  export let vertical: boolean = false;
  export let min: number = 0;
  export let max: number = 100;
  export let value: number = 0;
  export let step: number = 1;
  export let small: boolean = false;
  export let large: boolean = false;
  export let primary: boolean = false;
  export let secondary: boolean = false;
  export let error: boolean = false;
  export let warning: boolean = false;
  export let info: boolean = false;
  export let success: boolean = false;
  export let disabled: boolean = false;
</script>

<span
  class="root"
  class:vertical
  class:small
  class:large
  class:primary
  class:secondary
  class:error
  class:warning
  class:info
  class:success
  class:disabled
  on:click
  {...$$restProps}
>
  <span class="thumb"
    use:draggable={{
      axis: !vertical ? 'x' : 'y', value, step, min, max, disabled
    }}
    on:valueChange={(e) => value = e.detail}
  />
  <span class="track" />
</span>

<style>
  .root {
    --color: var(--palette-default);
    display: block;
    position: relative;
    width: 100%;
    height: 1em;
  }
  .vertical {
    width: 1em;
    height: 100%;
  }
  .track {
    display: block;
    position: absolute;
    z-index: 1;
    top: calc(0.5em - 2px);
    width: 100%;
    height: calc(1em / 4);
    background-color: var(--color);
  }
  .vertical .track {
    top: initial;
    left: calc(0.5em - 2px);
    width: calc(1em / 4);
    height: 100%;
  }
  .thumb {
    display: block;
    position: absolute;
    z-index: 2;
    width: 1em;
    height: 1em;
    background-color: var(--color);
    border-radius: 50%;
    cursor: pointer;
  }
  .thumb:hover {
    box-shadow: 0 0 0 8px var(--color);
  }
  .small {
    font-size: 0.75rem;
  }
  .large {
    font-size: 1.25rem;
  }
  .primary {
    --color: var(--palette-primary);
  }
  .secondary {
    --color: var(--palette-secondary);
  }
  .error {
    --color: var(--palette-error);
  }
  .warning {
    --color: var(--palette-warning);
  }
  .info {
    --color: var(--palette-info);
  }
  .success {
    --color: var(--palette-success);
  }
  .disabled {
    --color: var(--palette-text-disabled);
    cursor: default;
  }
</style>
