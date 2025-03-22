import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Button, Input, Row, Col, message } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import { getClientById } from 'utils';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const REDIRECT_AFTER_EDIT = `${APP_PREFIX_PATH}/clients/client-list`;

export class EditClient extends Component {

  render() {
    const onFinish = values => {
      const key = 'updatable';
      message.loading({ content: 'Updating...', key });
      setTimeout(() => {
        this.setState({
          name: values.name,
          email: values.email,
          userName: values.userName,
          dateOfBirth: values.dateOfBirth,
          phoneNumber: values.phoneNumber,
          website: values.website,
          address: values.address,
          city: values.city,
          postcode: values.postcode,
        })
        message.success({ content: 'Done!', key, duration: 2 });
        this.props.history.push(REDIRECT_AFTER_EDIT)
      }, 1000);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const { client } = this.props;
    if (client === null) {
      return <Loading cover="content" />
    }
    if (client === undefined) {
      return <div>Client not found. Invalid client id</div>
    }
    const { name, email, username, phone, website, address: { street, city, zipcode }, company } = client;
    return (
      <>
        <div className="mt-4">
          <Form
            name="basicInformation"
            layout="vertical"
            initialValues={
              {
                'name': name,
                'email': email,
                'username': username,
                'phoneNumber': phone,
                'company': company.name,
                'website': website,
                'street': street,
                'city': city,
                'zipcode': zipcode
              }
            }
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your name!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!'
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[{
                        required: true,
                        type: 'email',
                        message: 'Please enter a valid email!'
                      }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Phone Number"
                      name="phoneNumber"
                      rules={[{
                        required: true,
                        message: 'Please enter your phone'
                      }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Company"
                      name="company"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your company!'
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Website"
                      name="website"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="City"
                      name="city"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Street"
                      name="street"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Zip code"
                      name="zipcode"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state, props) => {
  const clientId = props.match.params.id;
  const { clients: { data } } = state;
  if (data) {
    const client = getClientById(data, clientId);
    return { client }
  } else {
    return { client: null }
  }
}

export default connect(mapStateToProps)(EditClient);
