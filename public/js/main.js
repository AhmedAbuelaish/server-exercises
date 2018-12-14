function getValue(){
    $.get('/api/value',function(data){
        console.log('getting')
        $('#VALUE').html(data)
    })
}

console.log('hi')
getValue()

$('#ADD').on('click',function (){
    console.log('adding')
    $.post('/api/increment',function(data){
        $('#VALUE').html(data)
    })
})

$('#SUBTRACT').on('click',function (){
    console.log('subtracting')
    $.post('/api/decrement',function(data){
        $('#VALUE').html(data)
    })
})

$('#RESET').on('click',function (){
    console.log('resetting')
    $.post('/api/reset',function(data){
        $('#VALUE').html(data)
    })
})