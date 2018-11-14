module.exports = {

    convertErrorMessage: function(errorMessage) {
        let message = ''

        if(errorMessage.indexOf('E11000') !== -1) {
            message = 'Email already exists, please use another email'
        }
        else {
            message = errorMessage.split(': ')[2]
        }
        return message
    }
}
