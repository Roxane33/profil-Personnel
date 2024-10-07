const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
  input.addEventListener('focus', () =>{
    input.style.transform = 'scale(1.05)'
    input.style.borderColor = '#007bff'
  }
  )

  
})