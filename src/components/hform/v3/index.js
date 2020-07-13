/**
 * antd v3.x
 */
import React, { useState, Component } from 'react';
import { Form, Row, Col, Input, Button, Cascader, DatePicker, TimePicker, Select, Rate, Radio, Checkbox, InputNumber, AutoComplete, Slider, Switch, TreeSelect, Icon, Upload } from 'antd';
import is from 'is_js';
import { get, sortBy, merge } from 'lodash';

export default class HForm extends Component {

    static defaultProps = {
        cols: 1,
        configs: [],
        extMap: {},
        layout: 'horizontal',
        rowApi: {},
        onChange: null,
        values: {},
    }

    render() {
        const { cols, configs, extMap, form, layout, rowApi, onChange, values } = this.props;
        const isInlineLayout = layout === 'inline';
        const colspan = 24 / cols;
        const list = utils.sort(utils.filter(configs));
        const childrenEle = list.map((_val, _i) => {
            const id = get(_val, 'extMap.id', '');
            const key = `H-FORM-${id || _i}`;
            const newProps = {
                config: _val.config,
                extMap: merge({}, extMap, _val.extMap, { pLayout: layout }),
                onChange,
                values,
                form: this.props.form,
            };
            if (isInlineLayout) {
                return <HFormItem key={key} {...newProps} />;
            }
            const colApi = get(_val, 'extMap.colApi', {});
            return (
                <Col key={key} span={colspan} {...colApi}>
                    <HFormItem {...newProps} />
                </Col>
            );
        });
        const RowProps = { ...rowApi };
        return isInlineLayout ? childrenEle : <Row {...RowProps}>{childrenEle}</Row>;
    }
}

class HFormItem extends Component {

    static defaultProps = {
        config: [],
        extMap: {},
        onChange: null,
        values: {},
    }

    render() {
        const { config, extMap, onChange, values } = this.props;
        const list = utils.parse(config);
        const length = list.length;
        const childrenEle = list.map((_val, _i) => {
            const key = _val.id || `H-FORM-ITEM-${_i}`;
            const placeholder = utils.placeholder({ ..._val, label: extMap.label });
            const style = utils.style({ ..._val });
            const data = utils.data({ ..._val });
            const newProps = {
                id: _val.id,
                type: _val.type,
                itemApi: merge({}, extMap.subItemApi, _val.itemApi),
                contentApi: merge({}, extMap.subContentApi, _val.contentApi, {
                    placeholder,
                    style,
                    value: values ? values[_val.id] : undefined,
                }),
                ext: merge({}, extMap.subExt, _val.ext, {
                    data,
                    form: this.props.form,
                }),
                onChange,
            };
            if (extMap.type === 'inputgroup') {
                // return <HFormItemContent key={key} {...newProps} />;
            }
            const colspan = Math.round(24 / length);
            const ColProps = {
                key,
                span: colspan,
                ...merge({}, extMap.subColApi, _val.colApi),
            };
            return (
                <Col {...ColProps}>
                    <HFormItemContent {...newProps} />
                </Col>
            );
        });
        const newProps = merge({}, {
                label: extMap.label,
                style: { display: 'flex', marginBottom: 0 },
                ...utils.itemstyle(extMap),
                required: utils.required(list),
            },
            extMap.itemApi,
        );

        return (
            <Form.Item {...newProps}>
                <Wraper extMap={extMap}>{childrenEle}</Wraper>
            </Form.Item>
        );
    }
}

class Wraper extends Component {
    render() {
        const { extMap = {}, children } = this.props;
        if (extMap.type === 'inputgroup') {
            // return <Input.Group compact>{children}</Input.Group>;
        }
        if (extMap.noWraper) return children;
        const newProps = merge({}, {
            gutter: 16,
            style: { paddingRight: 10 },
        }, extMap.rowApi);
        return <Row {...newProps}>{children}</Row>;
    }
}

class HFormItemContent extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        const { id, onChange } = this.props;
        if (onChange) {
            onChange({ id, value: e });
        }
    }
    render() {
        const { id, type, itemApi, contentApi, ext } = this.props;
        const ItemProps = {
            api: contentApi,
            ext,
            onChange: this.onChange,
        };

        let childrenEle = null;
        switch (type) {
            case 'button':
                childrenEle = <ItemButton {...ItemProps} />;
                break;
            case 'cascader':
                childrenEle = <ItemCascader {...ItemProps} />;
                break;
            case 'number':
                childrenEle = <ItemNumber {...ItemProps} />;
                break;
            case 'rate':
                childrenEle = <ItemRate {...ItemProps} />;
                break;
            case 'render':
                childrenEle = <ItemRender {...ItemProps} />;
                break;
            case 'date':
                childrenEle = <ItemDate {...ItemProps} />;
                break;
            case 'input':
                childrenEle = <ItemInput {...ItemProps} />;
                break;
            case 'radio':
                childrenEle = <ItemRadio {...ItemProps} />;
                break;
            case 'select':
                childrenEle = <ItemSelect {...ItemProps} />;
                break;
            case 'service':
                childrenEle = <ItemService {...ItemProps} />;
                break;
            case 'text':
                childrenEle = <ItemText {...ItemProps} />;
                break;
            case 'checkbox':
                childrenEle = <ItemCheckbox {...ItemProps} />;
                break;
            case 'slider':
                childrenEle = <ItemSlider {...ItemProps} />;
                break;
            case 'switch':
                childrenEle = <ItemSwitch {...ItemProps} />;
                break;
            case 'treeselect':
                childrenEle = <ItemTreeSlect {...ItemProps} />;
                break;
            case 'upload':
                childrenEle = <ItemUpload {...ItemProps} />;
                break;
        }

        const newProps = {
            ...itemApi,
        };
        if (type === 'checkbox' && ext.subType !== 'group') {
            newProps.valuePropName = 'checked';
        }
        return (
            <Form.Item {...newProps}>
                {ext.form.getFieldDecorator(id, {
                    rules: ext.rules,
                    initialValue: contentApi.value,
                })(childrenEle)}
        </Form.Item>
        );
    }
}

const utils = {
    filter: function(_array, _path = 'extMap.hide') {
        if (is.not.array(_array)) return [];
        return _array.filter(function(_v) {
            const hide = get(_v, _path, false);
            return !hide;
        })
    },
    sort: function(_array, _path = 'extMap.order') {
        if (is.not.array(_array)) return [];
        return sortBy(_array, function(_v) {
            const order = get(_v, _path, 1);
            return order;
        });
    },
    parse: function(_config) {
        const list = is.array(_config) ? _config : [_config];
        return this.filter(list, 'ext.hide');
    },
    placeholder: function(_params) {
        const { id = '', type = '', contentApi = {}, ext = {}, label = '' } = _params;
        if (contentApi.placeholder !== undefined) return contentApi.placeholder;
        let placeholder = '';
        const inputTypes = ['input', 'service', 'number'];
        const selectTypes = ['select', 'treeselect', 'cascader', 'date'];
        if (is.inArray(type, inputTypes)) {
            placeholder = `请输入${label || id}`;
        } else if (is.inArray(type, selectTypes)) {
            placeholder = `请选择${label || id}`;
        }
        if (type === 'date' && ext.subType === 'range') {
            placeholder = [`开始${label || id}`, `开始${label || id}`];
        }
        return placeholder;
    },
    style: function(_params) {
        const style = {};
        const { type = '', contentApi = {}, ext = {} } = _params;
        if (ext.toUpperCase) {
            Object.assign(style, { textTransform: 'uppercase' });
        } else if (ext.toLowerCase) {
            Object.assign(style, { textTransform: 'lowercase' });
        }
        const types = ['input', 'cascader', 'date', 'number', 'select', 'treeselect'];
        if (is.inArray(type, types)) {
            Object.assign(style, { width: '100%' });
        }
        merge(style, contentApi.style || {});
        return style;
    },
    data: function(_params) {
        const { type = '', ext = {} } = _params;
        if (is.not.array(ext.data)) return [];
        if (type === 'button') return ext.data;
        return ext.data;
    },
    required: function(_array) {
        const list = this.parse(_array);
        let required = false;
        list.some(function(_v) {
            const rules = get(_v, 'itemApi.rules', []);
            if (!rules || is.not.array(rules)) return false;
            required = rules.some(function(_r) {
                return _r.required;
            })
        })
        return required;
    },
    option: function(_target, _key) {
        if (is.object(_target)) {
            const { label = 'label', ...rest } = _target;
            const newProps = { key: _key, ...rest };
            return <Select.Option {...newProps}>{label}</Select.Option>;
        }
        if (is.string(_target)) {
            return <Select.Option key={_key} value={_target}>{_target}</Select.Option>
        }
        return null;
    },
    _default: function(_configs) {
        if (is.not.array(_configs)) return {};
        const values = {};
        _configs.forEach(function(_v) {
            const conf = _v.config;
            const confArray = is.array(conf) ? conf : [conf];
            confArray.forEach(function(_a) {
                const { ext = {}, id } = _a;
                const { defaultValue } = ext;
                if (defaultValue && id) {
                    values[id] = defaultValue;
                }
            });
        });
        return values;
    },
    itemstyle: function(_params) {
        const { pLayout, itemApi = {} } = _params || {};
        const { layout = 100 } = itemApi;
        if (pLayout !== 'horizontal') return null;
        if (is.object(layout)) return layout;
        let newLayout = layout;
        if (is.number(layout)) newLayout += 'px';
        return {
            labelCol: {
                style: { flex: '0 0 ' + newLayout },
            },
            wrapperCol: {
                style: { flex: '1 1 100%' },
            },
        }
    }
}

let timeout = null;

class ItemService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
        }
        this.handleChangeData = this.handleChangeData.bind(this);
        this.handleChangeLoading = this.handleChangeLoading.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChangeData(data) {
        this.setState({ data });
    }

    handleChangeLoading(loading) {
        this.setState({ loading });
    }

    handleSearch(_value) {
        const _this = this;
        const { ext } = this.props;
        if (!_value) {
            setData([]);
            return;
        }
        if (timeout) {
            window.clearTimeout(timeout);
            timeout = null;
        }

        function search() {
            try {
                _this.handleChangeLoading(true);
                ext.service(_value).then(resp => {
                    const data = ext.callback(resp);
                    _this.handleChangeData(data);
                    _this.handleChangeLoading(false);
                });
            } catch (e) {}
        }
        timeout = window.setTimeout(search, ext.time || 300);
    }
    render() {
        const { api, ext, onChange } = this.props;
        const { data, loading } = this.state;

        const newProps = {
            dataSource: data,
            allowClear: true,
            notFoundContent: loading ? <div><Icon type="loading" />&nbsp;loading...</div> : '',
            ...api,
            onSearch: this.handleSearch,
            onChange,
        }
        return <AutoComplete {...newProps} />;
    }
}

class ItemText extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        let { value } = api;
        if (is.array(ext.data)) {
            if (is.array(value)) {
                const textMap = [];
                ext.data.forEach(v => {
                    if (is.inArray(v.value, value)) textMap.push(v.label);
                });
                value = textMap.join(ext.join);
            } else {
                const findValue = ext.data.find(v => v.value === value);
                if (findValue) value = findValue.label;
            }
        }
        return <span className={`ant-form-text ${api.className}`}>{value}</span>;
    }
}

class ItemSelect extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        const elements = ext.data.map((_v, _i) => {
            const key = `item-select-${_i}`;
            if (is.array(_v.children)) {
                return <Select.OptGroup label={_v.label} key={key}>{_v.children.map(utils.option)}</Select.OptGroup>;
            }
            return utils.option(_v, key);
        });
        return <Select allowClear {...api} onChange={onChange}>{elements}</Select>;
    }
}

class ItemRadio extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        const childrenEle = ext.data.map((_v, _i) => {
            const key = `item-radio-${_i}`;
            if (ext.subType === 'button') {
                return <Radio.Button key={key} value={_v.value}>{_v.label}</Radio.Button>;
            }
            return <Radio key={key} value={_v.value}>{_v.label}</Radio>;
        })
        return <Radio.Group {...api} onChange={(e) => onChange(e.target.value)}>{childrenEle}</Radio.Group>
    }
}

class ItemInput extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        if (ext.subType === 'search') {
            return <Input.Search {...api} onChange={(e) => onChange(e.target.value)} />;
        } else if (ext.subType === 'textarea') {
            return <Input.TextArea rows={5} {...api} onChange={(e) => onChange(e.target.value)} />;
        } else if (ext.subType === 'password') {
            return <Input.Password autoComplete="true" {...api} onChange={(e) => onChange(e.target.value)} />;
        } else {
            return <Input allowClear {...api} onChange={(e) => {
                onChange(e.target.value)
            }} />;
        }
    }
}

class ItemDate extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        if (ext.subType === 'month') {
            return <DatePicker.MonthPicker {...api} onChange={onChange} />;
        } else if (ext.subType === 'time') {
            return <TimePicker {...api} onChange={onChange} />;
        } else if (ext.subType === 'range') {
            return <DatePicker.RangePicker {...api} onChange={onChange} />;
        } else if (ext.subType === 'week') {
            return <DatePicker.WeekPicker {...api} onChange={onChange} />;
        } else {
            return <DatePicker {...api} onChange={onChange} />;
        }
    }
}

class ItemCascader extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        return <Cascader options={ext.data} {...api} onChange={onChange} />;
    }
}

class ItemNumber extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        return <InputNumber { ...api } onChange={onChange} />;
    }
}

class ItemRate extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        return <Rate { ...api } onChange={onChange} />;
    }
}

class ItemSlider extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        return <Slider { ...api } onChange={onChange} />;
    }
}

class ItemSwitch extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        return <Switch { ...api } checked={api.value} onChange={onChange} />;
    }
}

class ItemTreeSlect extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        const dropdownStyle = { maxHeight: 300, ...api.dropdownStyle };
        return <TreeSelect treeData={ext.data} { ...api } onChange={onChange} dropdownStyle={dropdownStyle} />;
    }
}

class ItemButton extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        if (is.array(ext.data)) {
            return ext.data.map((_v, _i) => {
                const key = `item-button-${_i}`;
                const style = _i === ext.data.length - 1 ? null : { marginRight: 8 };
                const type = _v.type || api.type;
                return (
                    <span style={style} key={key}>
                  <Button type={type} {...api} onClick={() => onChange(_v.value)}>{_v.label}</Button>
                </span>
                );
            });
        }
        return <Button {...api} onClick={() => onChange(ext.value)}>{ext.label || '按钮'}</Button>;
    }
}

class ItemRender extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        if (is.function(ext.render)) {
            return ext.render({ api, ext, onChange });
        }
        return null;
    }
}

class ItemCheckbox extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        if (ext.subType === 'group') {
            return <Checkbox.Group options={ext.data} {...api} onChange={onChange} />;
        }
        return <Checkbox checked={!!api.value} {...api} onChange={(e) => onChange(e.target.checked)}>{ext.label}</Checkbox>;
    }
}

class ItemUpload extends Component {
    render() {
        const { api = {}, ext = {}, onChange } = this.props;
        const { value, ...restApi } = api;
        const newProps = {
            name: 'file',
            ...restApi,
            fileList: value,
            onChange(info) {
                try {
                  ext.callback(info);
                } catch (e) {}
            },
        }
        return (
            <Upload {...newProps}>
                {ext.content ? ext.content : (
                    <Button>
                      <Icon type="upload" /> 点击上传
                    </Button>
                )}
            </Upload>
        );
    }
}

export const getValue = utils._default;
