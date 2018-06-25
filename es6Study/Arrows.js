var evens = [2, 4, 6, 8]

var odds = evens.map(function (v) { v+1})
var nums = evens.map((v, i) => v+i)
var pairs = evens. map(v=>({even:v, odd:v+1}))





var bob = {
    _name:"Bob",
    _friends:["John", "Brian"],
    printFriends(){
        this._friends.forEach(f=>
        console.log(this._name+" knows "+f))
    }
}

console.log(bob.printFriends())


