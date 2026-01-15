import './product.css'

function Message({userName,textColor}){
    return (
        <div className='product'> 
            <p style={{color: textColor}}>Hii, {userName}</p>
        </div>
    );
}

export default Message;