import { useState } from 'react';
import './App.css';
import AddPostForm from './components/AddPostForm';
import PostsContainer from './components/PostsContainer';
import { posts_data } from './data/posts_data';

function App() {

  const [ posts, setPosts ] = useState(posts_data);

  const change_like = (id) => {
    // 1. Находим пост по айди
    const target_post = posts.find(el => el.id === id);

    // 2. У найденного поста обращаемся к свойству like и меняем на противоположное
    target_post.like = !target_post.like;

    // 3. Передаем обновленное состояние в setPosts
    setPosts([...posts])
  }

  const delete_post = id => {
    setPosts(posts.filter(el => el.id !== id))
  }

  const add_comment = (new_comment, post_id) => {
    // 1. Найти пост, к которому добавляется комментарий
    const target_post = posts.find(el => el.id === post_id);

    // 2. У найденного поста обращаемся к массиву comments и добавляем в него новый объект (push)
    target_post.comments.push(new_comment)

    // 3. Передаем обновленное состояние в setPosts
    setPosts([...posts])
  }

  // App -> PostsContainer -> Post -> CommentsBlock -> AddCommentForm

  return (
    <div>
      <AddPostForm />
      <PostsContainer posts={posts} change_like={change_like} delete_post={delete_post} add_comment={add_comment} />
    </div>
  );
}

export default App;