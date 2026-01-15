import Product1 from './product1'

function ProductTab1(){
    let features = ["Latest","Effiecient"];
    let features2 = {a: "hi-tech", b: "fastest"};
    return (
        <>
        <Product1 title = "Phone" price = "30k" specs = {features}/>
        <Product1 title = "Laptop" price = {80000} specs2 = {features2.a} />
        <Product1 title = "Charger" price = {1500} specs3 = {{a:"New-version", b: "120W"}}/>
        </>
    );
}

export default ProductTab1