class LOCALSTOREGEUTILS {
    constructor(){
        this.keyName = 'products';
    }

    getProducts(){
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if(productsLocalStorage !== null){
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }
    putProducts(id){
        let products = this.getProducts();
        products.push(id);
        localStorage.setItem(this.keyName, JSON.stringify(products))
    }
}


const localstorageutils = new LOCALSTOREGEUTILS();
localstorageutils.putProducts('el1');
localstorageutils.putProducts('el2');