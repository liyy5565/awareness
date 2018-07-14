import React, { Component } from 'react';
import { Form, Input, Button, Radio, Upload, Icon, Modal } from 'antd';

const FormItem = Form.Item;

export default class FoodInfo extends Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'horizontal',
            previewVisible: false,
            previewImage: '',
            fileList: [
                {
                    uid: -1,
                    name: 'xxx.png',
                    status: 'done',
                    url:
                        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                }
            ]
        };
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = file => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        });
    };
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
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <Form layout={formLayout}>
                <FormItem label="菜品分类" {...formItemLayout}>
                    <Radio.Group
                        defaultValue="horizontal"
                        onChange={this.handleFormLayoutChange}
                    >
                        <Radio.Button value="horizontal">优选 </Radio.Button>
                        <Radio.Button value="vertical">折扣 </Radio.Button>
                        <Radio.Button value="inline">进店必买 </Radio.Button>
                    </Radio.Group>
                </FormItem>
                <FormItem label="菜品列表" {...formItemLayout}>
                    <div className="clearfix">
                        <Upload
                            action="//jsonplaceholder.typicode.com/posts/"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {fileList.length >= 3 ? null : uploadButton}
                        </Upload>
                        <Modal
                            visible={previewVisible}
                            footer={null}
                            onCancel={this.handleCancel}
                        >
                            <img
                                alt="example"
                                style={{ width: '100%' }}
                                src={previewImage}
                            />
                        </Modal>
                    </div>
                </FormItem>
                <FormItem {...buttonItemLayout}>
                    <Button type="primary"> 提交 </Button>
                </FormItem>
            </Form>
        );
    }
}
