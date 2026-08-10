hexo.extend.generator.register('tags_index', function(locals) {
  return {
    path: 'tags/index.html',
    data: { title: 'Tags' },
    layout: ['tags']
  };
});

hexo.extend.generator.register('categories_index', function(locals) {
  return {
    path: 'categories/index.html',
    data: { title: 'Categories' },
    layout: ['categories']
  };
});

// Hexo's index generator skips the homepage when there are no posts yet.
// Keep the profile card available while this new blog is still empty.
hexo.extend.generator.register('empty_index', function(locals) {
  if (locals.posts.length) return [];

  return {
    path: 'index.html',
    data: {
      posts: locals.posts,
      current: 1,
      total: 1
    },
    layout: ['index']
  };
});
