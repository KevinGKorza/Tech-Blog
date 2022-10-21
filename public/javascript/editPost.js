const editFormHandler = async (event) => {
    event.preventDefault();
  
    const postId = document.querySelector('postId').value.trim();
    const text = document.querySelector('response').value.trim();
  
    if (postId && text) {
      const response = await fetch('/delete', {
        method: 'PUT',
        body: JSON.stringify({ title, post }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Unable to edit post, please try again.');
      }
    }
  };
  
  
  document
    .querySelector('.editpost')
    .addEventListener('submit', editFormHandler);