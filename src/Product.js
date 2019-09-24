import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <div className="items">
                <img src={this.props.img} alt="Collectors"/>
                <p>{this.props.product}</p>
            </div>
        );
    }
}

export default Product;