import React, {Component} from 'react';
import FrontPage from "./FrontPage";
import IssueCategory from "./IssueCategory";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 0}

    }

    setPage = (page) => {
        this.setState({page})
    };

    render() {
        return (
            <div>
                {this.props.page === 0 && <FrontPage page={this.setPage}/>}
                {this.props.page === 1 && <IssueCategory/>}
            </div>
        );
    }
}

export default App;