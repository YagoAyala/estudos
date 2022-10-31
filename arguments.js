function testArguments (num1, num2) {
    for(let i in arguments) {
        console.log(arguments)
        console.log(arguments[i])
    }
}
testArguments(26, 2, 3)

// Arguments é um ojeto que mostra quantos valores foram passado para a função;
