document.getElementById('regForm').onsubmit = async e => {
    // e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      age: e.target.age.value,
      course: e.target.course.value,
      roll: e.target.roll.value
    };
    let users = JSON.parse(localStorage.getItem('students') || '[]');
    users.push(user);
    localStorage.setItem('students', JSON.stringify(users));

    // Simulated AJAX POST
    await fetch('https://example.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });

    location.href = 'list.html';
  };