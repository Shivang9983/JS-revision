const user = {
    username: "shivang",
    price: 555,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "thor"
user.welcomeMessage()

console.log(this);
