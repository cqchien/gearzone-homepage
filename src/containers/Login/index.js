//=== Sign Up Page
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Button, Col, message, Row, Tooltip } from 'antd';
import loginApi from '../../apis/loginApi';
import InputField from '../../components/Custom/Field/InputField';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../../reducers/auth';
import * as Yup from 'yup';
import './index.scss';
import { setToken } from '../../apis/authority';
import { ROUTES } from '../../constant/routePath';

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  // fn: xử lý khi đăng nhập thành công
  const onLoginSuccess = async (data) => {
    message.success('Đăng nhập thành công');

    setToken(data.token);

    dispatch(setIsAuth(true));
    setTimeout(() => {
      window.location.href = ROUTES.HOME;
    }, 500);

  };

  // fn: đăng nhập
  const onLogin = async (account) => {
    try {
      setIsSubmitting(true);
      const result = await loginApi.postLogin(account);
      if (result.success) {
        onLoginSuccess(result.data);
      }
    } catch (error) {
      message.error('Đăng nhập thất bại');
    }
    setIsSubmitting(false);
  };

  // giá trọ khởi tạo cho formik
  const initialValue = {
    email: '',
    password: '',
    keepLogin: false,
  };

  // validate form trước submit với yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required('* Email bạn là gì ?')
      .email('* Email không hợp lệ !'),
    password: Yup.string()
      .trim()
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .required('* Mật khẩu của bạn là gì ?'),
  });

  //return...
  return (
    <div className="Login container">
      <h1 className="Login-title m-b-20 m-t-20 underline-title">
        <b>Đăng nhập</b>
      </h1>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onLogin}>
        {(formikProps) => {
          const suffixColor = 'rgba(0, 0, 0, 0.25)';
          return (
            <Form className="bg-form">
              <Row
                className="input-border"
                gutter={[40, 24]}
                justify="center"
              >
                {/* Form thông tin đăng nhập */}
                <Col span={24} className="m-t-20">
                  <FastField
                    name="email"
                    component={InputField}
                    className="input-form-common"
                    placeholder="Email *"
                    size="large"
                    suffix={
                      <Tooltip title="Email của bạn">
                        <InfoCircleOutlined
                          style={{
                            color: suffixColor,
                          }}
                        />
                      </Tooltip>
                    }
                  />
                </Col>
                <Col span={24}>
                  <FastField
                    name="password"
                    component={InputField}
                    className="input-form-common"
                    type="password"
                    placeholder="Mật khẩu *"
                    size="large"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Col>

                {/* Button submit */}
                <Col className="p-t-8 p-b-0 t-center" span={24}>
                  <Button
                    className="Login-submit-btn w-100"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}>
                    Đăng nhập
                  </Button>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
