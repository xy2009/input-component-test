import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * 请实现支持如下代码的InputNumber组件，可以受控和非受控。
 * function App(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
        <InputNumber value={value} onChange={e=>{}}/>
        <InputNumber defaultValue={value} onChange={e=>{}}/>
        </div>
    )
}
 */

export default class InputNumber extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inControl: true,// 受控状态标记
      ncValue: '',
    };
  }

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    value: '',
  }

  componentDidMount() {
    const { defaultValue } = this.props;
    // 当defaultValue赋值时，认为是 非受控状态，修改受控状态标记
    if (defaultValue || defaultValue === 0) {
      this.setState({
        inControl: false,
        ncValue: defaultValue,
      });
    }
  }

  get mValue() {
    if (this.state.inControl) {
      return this.props.value;
    } else {
      return this.state.ncValue;
    }
  }
  render() {
    const { defaultValue, onChange } = this.props;
    const { inControl } = this.state;
    const onMyChange = (e) => {
      // 当为非受控状态时，根据onChange事件更改value值
      if (!inControl) {
        this.setState({
          ncValue: e.target.value,
        });
      }
      // 当传入 onChange 事件时，将事件对象返回
      if (onChange) {
        onChange(e);
      }
    };
    return (
      <div>
        <input type='number'
          defaultValue={!inControl && defaultValue}
          value={this.mValue}
          onChange={onMyChange}
        />
      </div>
    )
  }
}