import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const FormItem = Form.Item;

export default class ShopBasic extends Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'horizontal'
        };
    }
    render() {
        const { formLayout } = this.state;
        const formItemLayout =
            formLayout === 'horizontal'
                ? {
                      labelCol: {
                          span: 4
                      },
                      wrapperCol: {
                          span: 12
                      }
                  }
                : null;
        const buttonItemLayout =
            formLayout === 'horizontal'
                ? {
                      wrapperCol: {
                          span: 12,
                          offset: 4
                      }
                  }
                : null;
        return (
            <Form layout={formLayout}>
                <FormItem label="店铺类型" {...formItemLayout}>
                    <Radio.Group
                        defaultValue="horizontal"
                        onChange={this.handleFormLayoutChange}
                    >
                        <Radio.Button value="horizontal">酒店 </Radio.Button>
                        <Radio.Button value="vertical">饭店 </Radio.Button>
                        <Radio.Button value="inline">流动商贩 </Radio.Button>
                    </Radio.Group>
                </FormItem>
                <FormItem label="门店地址" {...formItemLayout}>
                    <Input placeholder="请输入门店地址" />
                </FormItem>
                <FormItem label="店铺名称" {...formItemLayout}>
                    <Input placeholder="请输入店铺名称" />
                </FormItem>
                <FormItem label="商家电话" {...formItemLayout}>
                    <Input placeholder="请输入商家电话" />
                </FormItem>
                <FormItem {...buttonItemLayout}>
                    <Button type="primary"> 提交 </Button>
                </FormItem>
            </Form>
        );
    }
}
