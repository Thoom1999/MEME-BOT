function findNumber(str) {
    numbers = str.match(/\d+/)
    if (numbers == null) {
        return 0
    }
    
    return numbers
}

module.exports = { findNumber }