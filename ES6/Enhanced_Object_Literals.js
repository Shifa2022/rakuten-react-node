var serviceBase =    {port: 3000, url: 'localhost'},   getAccounts = function(){return [1,2,3]}      // TWo variable serviceBase and getAccounts are declared under same 'var'.    

var person = {
    name: "Ravi",
    age: 23
    
}

var accountService = {                      // 'accountService' is a  Enhanced Object Literal.

    serviceBase,
    getAccounts,
    toString() {
         return JSON.stringify((super.valueOf()))
    },
    getUrl() {return "http://" + this.url + ':' + this.port},
    data: getAccounts()
};


console.log(accountService)