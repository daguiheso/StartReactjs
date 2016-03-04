var React = require('react');
var ReactDOM = require ('react-dom');

var Comida = React.createClass({
    getInitialState : function () {        
        return {
            like : Boolean(this.props.like)
        }
    },
    handleLike : function () {
        this.setState({like: !this.state.like})
    },
    render: function() {
        return (
            <div className="comida">
                <h1 className="bg-success">{this.props.nombre}</h1>
                <p className="bg-info">
                    Posición: <i>{this.props.children}</i>
                </p>
                <div>
                    <input onChange={this.handleLike} defaultChecked={this.state.like} type="checkbox" className="glyphicon glyphicon-heart heart"/>
                    <br/>
                    Like : <b>{String(this.state.like)}</b>
                </div>
            </div>
        )
    }
});

var ListaComida = React.createClass({
    getInitialState : function () {
        return {
            comidas: [
                'Tacos',
                'Paella',
                'Ceviche',
                'Mole'
            ]
        }
    },
    render : function () {
        return (
            <div className="centerBlock">
                <header>
                    <h1>Mis comidas favoritas</h1>
                    <i>Total : {this.state.comidas.length}</i>
                </header>
                <div>
                    {
                        this.state.comidas.map(
                            function(comida, i) {
                                return (
                                    <Comida key={i} nombre={comida}>
                                        {i+1}
                                    </Comida>
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
    }
})

ReactDOM.render(
    <ListaComida/>,
    document.getElementById('container')
);