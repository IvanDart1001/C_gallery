require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片相关数据
let imageData = require('../data/imageData.json');

//利用自执行函数，将图片名信息转成URL信息
imageData = ((imageDataArr) =>{
  for(let i = 0,j = imageDataArr.length; i < j; i++){
    let singleImageData = imageDataArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDataArr[i] = singleImageData;
  }

  return imageDataArr;
})(imageData);


class App extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="img-nav">
        </nav>
      </section>
    );
  }
}

App.defaultProps = {
};

export default App;
