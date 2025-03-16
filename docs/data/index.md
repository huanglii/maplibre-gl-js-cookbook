# 空间数据

{{ 1 + 1 }}

::: sandboxrun

```html

<div>Sandboxrun</div>

```

:::

:::demo src=examples/Input.vue
:::

```vue preview
<template>
  <div>
    <p>
      {{ title }}
    </p>
    <MapLibreMap />
  </div>
</template>
<script lang="ts" setup>
import { ref, defineComponent } from 'vue'
const title = ref('this is basic demo12')
</script>
```
