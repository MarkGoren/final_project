export default function ProductCard(props){
    return (
        <div className="card col-lg-4 col-md-12 col-sm-12" style={{width: "18rem"}}>
            <div id="img-container">
                <img src={props.productImgSrc[0]} className="card-img-top" alt="productImg"></img>
                <div id="like_button"><i className="fa fa-heart-o" aria-hidden="true" id="like_button_icon" style={{color: 'red'}}></i></div>
            </div>
            <div className="card-body">
                <p id={props.id} onClick={props.onClick} className="card-text">{props.productName}</p>
                <p className="card-text">{props.productCost}$</p>
            </div>
        </div>
    )
}