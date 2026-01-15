import './product.css'
function Product1({title,price,specs,specs2}){
    
    return (
        <div className="product">
            <h3>{title} </h3>
            <p>Price: {price}</p>
            <p>Specs: {specs}</p>
            <p>{specs2}</p>
            
        </div>
    );
}

export default Product1;