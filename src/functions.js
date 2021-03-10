module.exports = {
  sum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Invalid argument(s)')
    }

    if(a < 0 || b < 0) {
      throw new Error('Corrupted bank account balance')
    }
    
    return a + b
  },
  sayHello() {
    return 'hello'
  },
}
