import TodoList from '../src/components/TodoList'
import store from '../src/store'
export default {
  title: 'Test components',
  component: TodoList,
};

export const ToStorybook = () => ({
  components: { TodoList },
  template: '<TodoList />',
  methods: {  },
  store: store,
});

ToStorybook.story = {
  name: 'TodoList',
};
