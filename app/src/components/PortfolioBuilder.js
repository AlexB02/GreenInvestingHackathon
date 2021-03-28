class PortfolioBuilder extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    addStock(ticker) {
        this.updateState()
    }

    render() {
        return (
            <div>{this.state.props}</div>
        )
    }
}