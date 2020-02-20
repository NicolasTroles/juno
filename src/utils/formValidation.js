const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Campo obrigatório!'
    }
    if (!values.email) {
        errors.email = 'Campo obrigatório!'
    } else {
        var regex = /\S+@\S+\.\S+/;
        if (!regex.test(values.email)) {
            errors.email = 'Digite um email válido!'
        }
    }
    if (!values.password) {
        errors.password = 'Campo obrigatório!'
    }
    if (!values.cpf) {
        errors.cpf = 'Campo obrigatório!'
    } else if (values.cpf.length < 11) {
        errors.cpf = 'Preencha o CPF completo!'
    }

    return errors;
}

export default validate;