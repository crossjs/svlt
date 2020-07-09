<button
  class:small
  class:large
  class:primary
  class:secondary
  class:error
  class:warning
  class:info
  class:success
  class:outlined
  class:contained
  on:click
  {disabled}
  {...$$restProps}
>
  <slot></slot>
</button>

<script lang="typescript">
  export let small: boolean = false;
  export let large: boolean = false;
  export let primary: boolean = false;
  export let secondary: boolean = false;
  export let error: boolean = false;
  export let warning: boolean = false;
  export let info: boolean = false;
  export let success: boolean = false;
  export let outlined: boolean = false;
  export let contained: boolean = false;
  export let disabled: boolean = false;
</script>

<style>
  button {
    --color: var(--palette-default);
    --contrastText: var(--palette-default-contrastText);
    padding: 0.5em 1em;
    border: none;
    border-radius: var(--shape-borderRadius);
    cursor: pointer;
    color: var(--color);
    background-color: transparent;
  }
  button:hover {
    filter: brightness(80%);
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
  .contained {
    color: var(--contrastText);
    background: var(--color);
  }
  .outlined {
    border: 1px solid var(--color);
  }
  [disabled] {
    --color: var(--palette-text-disabled);
    cursor: default;
  }
</style>
