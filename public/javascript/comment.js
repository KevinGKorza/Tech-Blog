const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const text = document.querySelector('text').value.trim();
    const postId = document.querySelector('postId').value.trim();
  
    if (text && postId) {
      const response = await fetch('/Comment', {
        method: 'COMMENT',
        body: JSON.stringify({ text, postId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add comment, please try again.');
      }
    }
  };
  
  
  document
    .querySelector('.newcomment')
    .addEventListener('submit', commentFormHandler);