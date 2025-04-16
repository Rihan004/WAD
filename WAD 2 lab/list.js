const students = JSON.parse(localStorage.getItem('students') || '[]');
students.forEach(s => {
  userList.innerHTML += `
    <li>
      <p><strong>Name:</strong> ${s.name}</p>
      <p><strong>Email:</strong> ${s.email}</p>
      <p><strong>Age:</strong> ${s.age}</p>
      <p><strong>Course:</strong> ${s.course}</p>
      <p><strong>Roll No:</strong> ${s.roll}</p>
    </li>
  `});