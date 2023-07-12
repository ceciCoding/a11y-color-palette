# Nuxt 3 Frontend

## Composition API

### Components structure

```
<script setup >
import { useProjectStore } from '~/stores/project'

// PINIA
const projectStore = useProjectStore()

// COMPOSABLES
const { composableData  } = useComposable()

// PROPS
const props = defineProps({
  myProp: Object,
})

// EVENTS 
const emit = defineEmits(['submit'])

// DATA
const something = ref('something')

// COMPUTED
const computedProperty = computed(() => 'Hey computed')

// HOOKS
onMounted(() => callback())

// METHODS
const callback = (parameter) => console.log(parameter)
</script>
```
