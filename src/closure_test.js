function Member() {
    // this.name = '브라우저는 작동원리가 다름.';
    var name = '프라이빗으로 막고 쓰겠다.'
    return {
        setName: function(n) {
            name = n;
        },
        getName: function() {
            return name;
        }
    }
}


var member = new Member();
console.log(member.name);
member.setName('sdklfjsldkfjskldjf')
console.log(member.getName());
