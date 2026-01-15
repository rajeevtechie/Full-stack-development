import './product.css';

function Product1({ title, price, specs, specs2, specs3 }) {
    const styles = {backgroundColor: price>3000? "wheat": ""};

    return (
        <div className="product" style={styles}>
            <h3>{title}</h3>

            <p>Price: {price}</p>

            {specs && (
                <p>Specs: {specs.join(", ")}</p>
            )}

            {specs2 && (
                <p>{specs2}</p>
            )}

            {specs3 && (
                <ul>
                    {specs3.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            )}

            {price > 30000 ? <p>"Discount = 5%"</p>: null}
        </div>
    );
}

export default Product1;
