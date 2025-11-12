function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const icon = field.nextElementSibling.querySelector('i');
    
    if (field.type === 'password') {
        field.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        field.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password')?.value;
            const confirmPassword = document.getElementById('confirmPassword')?.value;
            
            if (password && confirmPassword && password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return false;
            }
            
            alert('¡Registro exitoso!');
        });
    }
});
