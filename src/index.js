import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 在组件中,this.props.who,表示who属性
// 之后使用<Greeting who='world' />，为Greeting组件指定属性who,其值为'world'
// <Greeting who='react' /> 指定属性who,其值为'react'，参见app组件
class Greeting extends Component {
  render() {
    return (
      <div>  
          <h1>{`hello ${this.props.who}`}</h1> 
      </div>
    );
    // 语法要点1：模板字符串，使用``而非''，可以在其中使用${ }来将变量嵌入
  }
}

// 组件的另一种定义方式，函数，只要返回jsx即可
// 这个叫stateless组件
// 可以处理属性，也可以处理context(今后再讲)，但没有状态(后面描述)
// 语法要点2：App后面 (参数)=>{} 叫做箭头函数，区别于正常的js函数
const App=(props,context)=>{
  return (
    <div>
      <Greeting who={'world'} />
      <Greeting who={'react'} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

