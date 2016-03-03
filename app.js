var React = require('react');
var ReactDOM = require ('react-dom');

var Comida = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="bg-success">{this.props.nombre}</h1>
                <p className="bg-info">
                    Comida <i>{this.props.children}</i>
                </p>
                <p>
                    <span className="glyphicon glyphicon-heart glyphicon-heart-lg red"></span>
                </p>
            </div>
        );
    }
});

ReactDOM.render(
    <div className="centerBlock">
        <Comida nombre="Tacos">
            Mexicana
        </Comida>
        <Comida nombre="Paella">
            Española
        </Comida>
        <Comida nombre="Ceviche">
            Peruana
        </Comida>
    </div>
    , document.getElementById('container')
);