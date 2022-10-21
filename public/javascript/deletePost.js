const deleteFormHandler = async (event) => {
    event.preventDefault();
  
    const postId = document.querySelector('postId').value.trim();
    const response = document.querySelector('response').value.trim();
  
    if (postId && response) {
      const response = await fetch('/delete', {
        method: 'DELETE',
        body: JSON.stringify({ title, post }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete post, please try again.');
      }
    }
  };
  
  
  document
    .querySelector('.deletebttn')
    .addEventListener('click', deleteFormHandler);