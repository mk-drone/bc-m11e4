

    function Phone(brand, price, color){
        this.brand = brand;
        this.price = price;
        this.color = color;        
    }

    Phone.prototype.printInfo = function(){
        console.log(`The brand is ${this.brand}, the price is ${this.price} and the color is ${this.color}`);
    }

    Phone.prototype.comparePrices = function(Phone){
        if(Phone.price > this.price){
            console.log(`${this.brand} is cheaper than ${Phone.brand}`)
        }else{
            console.log(`${this.brand} is more expensive than ${Phone.brand}`)
        }
    }

    let iPhone6S = new Phone('iphone', 5000, 'white');
    let samsung = new Phone('samsung', 3000, 'black');
    // iPhone6S.printInfo();   
    samsung.comparePrices(iPhone6S);
    iPhone6S.comparePrices(samsung);
