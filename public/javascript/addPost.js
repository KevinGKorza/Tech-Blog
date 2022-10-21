const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('title').value.trim();
    const post = document.querySelector('post').value.trim();
  
    if (title && post) {
      const response = await fetch('/post', {
        method: 'POST',
        body: JSON.stringify({ title, post }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add post.');
      }
    }
  };
  
  
  document
    .querySelector('.newpost')
    .addEventListener('submit', newFormHandler);