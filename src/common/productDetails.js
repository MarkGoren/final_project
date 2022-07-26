import { Container, Button, Carousel, ToggleButtonGroup, ToggleButton, Form } from "react-bootstrap";

export default function ProductDetails(props){
    return (
        <Container className="d-flex justify-content-start" style={{'marginTop': '1.5rem'}}>
                            
            {/* <img src={props.productImgSrc} alt='uh oh' style={{width: '30rem', margin: '0 3rem'}}></img> */}
            <Carousel style={{width: '90rem', margin: '0 3rem'}}>
                {props.productImgSrc.map(imgSrc => 
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={imgSrc}
                alt="uh oh"
                />
                </Carousel.Item>)}
            </Carousel>
            
            <Container>
                <h4 style={{"fontSize": '3rem'}}>{props.productName}</h4>
                <h6 style={{"fontSize": '1.5rem'}}>{props.productCost}$</h6>

                {/* {props.productColors ?
                (<div style={{margin: '2rem 0', "fontSize": '1.5rem'}}>
                    <p>Color</p>
                    <ToggleButtonGroup type="radio" name='colors' defaultValue={'white'}>
                    {props.productColors.map(color => <ToggleButton value={color} className="btn btn-info btn-circle btn-md" style={{"backgroundColor": color, "borderColor": 'black', 'borderRadius': '100%'}}></ToggleButton>)}
                    </ToggleButtonGroup>
                </div>) : null
                } */}

                {props.productColors ?
                (<div style={{margin: '2rem 0', "fontSize": '1.5rem'}}>
                    <p>Color</p>
                    {/* <div className="btn-group" data-toggle="buttons">
                    {props.productColors.map(color => 
                        <input value={color} name="color" className="form-check-input btn btn-info btn-circle btn-md" type="radio" autoComplete="off" style={{"backgroundColor": color, 'borderRadius': '100%', 'width': '3rem', 'height': '3rem'}}></input>
                    )}
                    </div> */}

                    <div className="btn-group" data-toggle="buttons">
                    {props.productColors.map(color => [
                        <input value={color} type="radio" class="btn-check" name="colors" id={color} autoComplete="off"></input>,
                        <label class="btn btn-main btn-circle" style={{'backgroundColor': color, 'borderRadius': '100%', 'width': '3rem', 'height': '3rem', 'margin': '0.5rem', 'borderWidth': '0.15rem'}} for={color}></label>
                    ]
                    )}
                    </div>
                    
                </div>) : null
                }

                {props.productSizes ?
                (<div style={{margin: '2rem 0', "fontSize": '1.5rem'}}> 
                    <p>Size</p>
                    
                    <div className="btn-group" data-toggle="buttons">
                    {props.productSizes.map(size => [
                        <input value={size} type="radio" class="btn-check" name="sizes" id={size} autoComplete="off"></input>,
                        <label class="btn btn-main" style={{'borderRadius': '0', 'width': '4.5rem', 'margin': '3px', 'borderWidth': '0.15rem'}} for={size}>{size}</label>
                    ]
                    )}
                    </div>

                    {/* <ToggleButtonGroup type="radio" name="sizes">
                    {props.productSizes.map(size => <ToggleButton value={size} className='myButton' variant="light" style={{"borderRadius": '0', "borderColor": 'white', width: '5.5rem', backgroundColor: 'white', margin: '2px'}}>{size}</ToggleButton>)}
                    </ToggleButtonGroup> */}
                </div>) : null
                }

                <div className="d-flex justify-content-start" style={{margin: '4rem 0 0 2.5rem', "fontSize": '1.5rem'}}>
                    <i className="fa fa-heart-o" aria-hidden="true" id="like_button_icon" style={{color: 'black', fontSize: '3rem', marginRight: '3rem'}}></i>
                    <Button className="rounded-pill" variant="dark" style={{width: '13rem', fontSize: '1.25rem'}}><i className="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</Button>
                </div>
            </Container>
            <Button onClick={props.onClick} variant="light" style={{"backgroundColor": 'white', "borderColor": 'white', width: '7rem', height: '3.5rem', "fontSize": '2rem'}}><i className="fa fa-times" aria-hidden="true"></i></Button>
        </Container>
    )
}