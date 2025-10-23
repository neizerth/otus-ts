function isUpdateAction(action: unknown): action is UpdateAction {
  if (!action || typeof action !== 'object') {
    return false;
  }

  return ('type' in action) && action.type === 'update'
}

interface Post {
  title: string
  description: string
}

interface Action {
  type: string;
}

interface UpdateAction {
  type: 'update'
  data: {
    title: string;
    description?: string;
  }
}

function processPost(post: Post, action: Action) {

  const x = action as never as number;
  
  if (isUpdateAction(action)) {
    const newData = action.data;
  }
}
