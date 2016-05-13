var React = require('react');
var ReactDOM = require('react-dom');
require('./styles/main.css');
var classNames = require('classnames');

var Image = React.createClass({
  handleChangeFile: function(e) {
    var reader = new FileReader();
    var file = e.target.files[0];
    e.preventDefault();

    reader.onload = function(upload) {
      this.props.onRequestChangeImageSrc(reader.result);
    }.bind(this);
    reader.readAsDataURL(file);
  },

  render: function() {
    var imageSrc = this.props.imageSrc;
    var rotate = this.props.rotate;
    var translate = this.props.translate;
    var opacity = this.props.opacity;
    var scale = this.props.scale;


return (

  <div id="content">
    <div className="">

            <img src={imageSrc} className={classNames({ rotator: rotate, translator: translate, scaler: scale, imgOpacity: opacity })} />
            <div>
          <input type="file" onChange={this.handleChangeFile} />
            </div>
      </div>
    </div>
    );
  }
});


var Controls = React.createClass({
  handleClickReset: function() {
    this.props.onRequestReset();
  },

  render: function() {
    var rotate = this.props.rotate;
    var translate = this.props.translate;
    var opacity = this.props.opacity;
    var scale = this.props.scale;

    var rotateButton;
    var translateButton;
    var scaleButton;
    var opacityButton;

    var rotateAppliedButton;
    var translateAppliedButton;
    var scaleAppliedButton;
    var opacityAppliedButton;



    if(rotate === true){
      rotateButton = "btnHiden"
    }else{
      rotateAppliedButton= "btnHiden";
    };

    if(translate === true){
      translateButton = "btnHiden"
    }else{
       translateAppliedButton = "btnHiden";
     };

     if(opacity === true){
       opacityButton = "btnHiden"
     }else{
       opacityAppliedButton = "btnHiden";
     };

     if(scale === true){
       scaleButton = "btnHiden"
     }else{
       scaleAppliedButton = "btnHiden";
     };


    return (
      <div>


        <div id="middle">
            <h3>Available Action</h3>
             <button type="button" checked={rotate} className={rotateButton} onClick={this.props.onRequestChangeRotate}>
             <span>Rotate</span>
             </button>

             <button type="button" checked={translate} className={translateButton} onClick={this.props.onRequestChangeTranslate}>
             <span>Translate</span>
             </button>

             <button type="button" checked={opacity} className={opacityButton} onClick={this.props.onRequestChangeOpacity}>
             <span>Opacity</span>
             </button>

             <button type="button" checked={scale} className={scaleButton} onClick={this.props.onRequestChangeScale}>
             <span>Scale</span>
             </button>
        </div>


          <div id="sidebar">
          <h3>Applied Action</h3>
             <button type="button" checked={rotate} className={rotateAppliedButton} onClick={this.props.onRequestChangeRotate}>
             <span>Rotate</span>
             </button>

             <button type="button" checked={translate} className={translateAppliedButton} onClick={this.props.onRequestChangeTranslate}>
             <span>Translate</span>
             </button>

             <button type="button" checked={opacity} className={opacityAppliedButton} onClick={this.props.onRequestChangeOpacity}>
             <span>Opacity</span>
             </button>

             <button type="button" checked={scale} className={scaleAppliedButton} onClick={this.props.onRequestChangeScale}>
             <span>Scale</span>
             </button>

        <div>
          <button onClick={this.handleClickReset}>Reset</button>
        </div>
      </div>
      </div>


    );
  }
});


var StateContainer = React.createClass({
  getInitialState: function() {
    return {
      rotate: false,
      translate: false,
      opacity: false,
      scale: false,
      imageSrc: ' '
    };
  },

  handleRequestChangeRotate: function() {
    this.setState({ rotate: !this.state.rotate });
  },

  handleRequestChangeTranslate: function() {
    this.setState({ translate: !this.state.translate });
  },

  handleRequestChangeOpacity: function () {
    this.setState({ opacity: !this.state.opacity });
  },

  handleRequestChangeScale: function() {
    this.setState({ scale: !this.state.scale });
  },

  handleRequestChangeImageSrc: function(imageSrc) {
    this.setState({ imageSrc: imageSrc });
  },

  handleRequestReset: function() {
    this.setState({
      rotate: false,
      translate: false,
      opacity: false,
      scale: false,
      imageSrc: ' '
    });
  },

  render: function() {
    return (
      <div>
        <Image
          imageSrc={this.state.imageSrc}
          onRequestChangeImageSrc={this.handleRequestChangeImageSrc}
          rotate={this.state.rotate}
          translate={this.state.translate}
          opacity={this.state.opacity}
          scale={this.state.scale}
        />
        <Controls
          rotate={this.state.rotate}
          translate={this.state.translate}
          opacity={this.state.opacity}
          scale={this.state.scale}
          onRequestChangeRotate={this.handleRequestChangeRotate}
          onRequestChangeTranslate={this.handleRequestChangeTranslate}
          onRequestChangeOpacity={this.handleRequestChangeOpacity}
          onRequestChangeScale={this.handleRequestChangeScale}
          onRequestReset={this.handleRequestReset}
        />
      </div>
    );
  }
});

ReactDOM.render(<StateContainer/>, document.getElementById("app"));
