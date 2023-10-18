function mapProducts(array){
    const mapData = array.map(product=>{
        return {
            id: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
                rating: product.rating,
                category: product.category,
        }
    })
    return mapData
}

function mapUsers(array){
    const mapData = array.map(users=>{
        return {
            id: users.id,
            name: users.firstName,
            lastname: users.lastName,
            age: users.age,
            gender: users.gender,
            email: users.email
        }
    
    })
    return mapData
}

function filterPricesOrCategories(typeData, number, products) {
    let pricesOrCategories
    if (typeData === 'category') {
        pricesOrCategories = products.filter(product => product.category === 'groceries' );
    }
    if (typeData === 'price') {
        pricesOrCategories = products.filter(product => product.price < number);
    }
    return pricesOrCategories;
}


async function getHandler(typeData) {
    const getData = await fetch(`https://dummyjson.com/${typeData}`);
    const data = await getData.json();
    const parseData = data[typeData]
    if(typeData === 'products'){
        return mapProducts(parseData);
    }
    if(typeData === 'users'){
        console.log(parseData,'thisthisthis')
        return mapUsers(parseData);
    }
}

async function PromiseAndAsync(type, price) {
    const schema = {
        products: 'products',
        users: 'users'
    }
    try {
        const products = await getHandler(schema.products);
        const users = await getHandler(schema.users);
        const filterProducts = filterPricesOrCategories(type, price, products);
        console.log(filterProducts,users)
    }
    catch (error) {
        console.error(error);
    }
}

PromiseAndAsync('price',30);