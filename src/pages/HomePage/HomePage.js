import React, { Component } from 'react';
import Slider1 from './images/slider1.jpg'
import Slider2 from './images/slider2.jpg'
import Slider3 from './images/slider3.jpg'
import ListProduct from './../../components/ListProduct/ListProduct';
class HomePage extends Component {
    addProductToCard=(item,quanlity)=>{
        this.props.addProductToCard(item,quanlity)
    }
    render() {
        //console.log("data props", this.props.data)
        return (
            <div className="container">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={Slider1} alt="Los Angeles" style={{ width: '100%', height:'350px' }} />
                        </div>
                        <div className="item">
                            <img src={Slider2} alt="Chicago" style={{ width: '100%',height:'350px' }} />
                        </div>
                        <div className="item">
                            <img src={Slider3} alt="New york" style={{ width: '100%',height:'350px' }} />
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <ListProduct addProductToCard={this.addProductToCard}/>
            </div>
        );
    }
}

export default HomePage;