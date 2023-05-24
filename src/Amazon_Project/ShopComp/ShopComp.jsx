import { useState, useEffect } from "react";


const ShopComp=()=>
{
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    function LoadCategories(){
        fetch('http://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=> {
            data.unshift('all');
            setCategories(data);
        })
    }

    function LoadProducts(url){
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            setProducts(data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts('http://fakestoreapi.com/products');
    },[])


    function handleCategoryChange(e){
        if(e.target.value=='all'){
            LoadProducts('http://fakestoreapi.com/products')
        } else {
        LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`)
        }
    }


    return(
        <div className="container-fluid">
          <section className="row mt-3">
            <nav className="col-2">
               <div>
                <label>Select a Category</label>
                <div>
                    <select onChange={handleCategoryChange} className="form-select">
                        {
                            categories.map(category=>
                                <option value={category} key={category}>{category.toUpperCase()}</option>
                                )
                        }
                    </select>
                </div>
               </div>
            </nav>
            <main className="col-8 d-flex flex-wrap overflow-auto" style={{height:'800px'}} >
                {
                    products.map(product=>
                        <div key={product.id} className="card m-2 p-2 w-25">
                            <img src={product.image} className="card-img-top" height="150" />
                            <div className="card-header" style={{height:'160px'}}>
                                <p>{product.title}</p>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>
                                        <span className="bi bi-star-fill text-success"></span> 
                                        {product.rating.rate} <span>[{product.rating.count}]</span>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        )
                }
            </main>
          </section>
        </div>
    )
}
export default ShopComp;