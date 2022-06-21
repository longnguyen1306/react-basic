import React from "react";

class MyComponent extends React.Component {
    /**
     *JSX
     * return về 1 khối
     *
     */

    state = {
        name: 'Long Nguyễn Dương',
        phone: '0934072724'
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <>
                <div className="name">
                    <input type="text" value={this.state.name}
                           onChange={(event) => this.handleChangeName(event)}
                    />
                    <br/>
                    Hello: {this.state.name}
                </div>
                <div>
                    Số điện thoại: {this.state.phone}
                </div>
            </>
        )
    }
}

export default MyComponent;