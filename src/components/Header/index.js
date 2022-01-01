import {
  ReconciliationOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  AutoComplete,
  Badge,
  Button,
  Dropdown,
  Input,
  Menu,
} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import defaultAvt from '../../assets/images/default-avt.png';
import logoUrl from '../../assets/images/logo.png';
import { reduceProductName, autoSearchOptions } from '../../helpers';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant/routePath';
import Cart from '../Cart/index';
import './index.scss';
import { setIsAuth } from '../../reducers/auth';
import { removeToken } from '../../apis/authority';

function totalItemCarts(carts) {
  if (carts) {
    return carts.reduce((total, item) => total + item.amount, 0);
  }
}

function Header() {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.authenticate);
  const user = useSelector((state) => state.user);
  const carts = useSelector((state) => state.carts);

  const options = autoSearchOptions();

  // event: log out
  const onLogout = () => {
    removeToken();
    dispatch(setIsAuth(false));

    window.location.reload();

  };

  // Menu for user action
  const userActionMenu = (
    <Menu className="m-t-24" style={{ width: 244 }}>
      {isAuth ? (
        <Menu.Item>
          <Button
            onClick={onLogout}
            size="large"
            className="w-100"
            type="primary"
            danger={isAuth}>
            Đăng xuất
          </Button>
        </Menu.Item>
      ) :
        (
          <>
            <Menu.Item>
              <Button size="large" className="w-100" type="primary">
                <Link to={ROUTES.SIGNIN}>Đăng nhập</Link>
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button size="large" className="w-100 btn-secondary" type="default">
                <Link to={ROUTES.SIGNUP}>
                  Đăng ký
                </Link>
              </Button>
            </Menu.Item>
          </>
        )}

      {isAuth && (
        <Menu.Item>
          <Button size="large" className="w-100 btn-secondary" type="default">
            <Link to={ROUTES.ACCOUNT + '/'}>Quản lý Tài khoản</Link>
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );

  // rendering...
  return (
    <div
      className="wrap-header container-fluid bg-white w-100vw"
      style={{ height: 104 }}>
      <div className="header container h-100 d-flex justify-content-between align-i-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logoUrl}
            width={112}
            height={48}
            alt='img'
          />
        </Link>

        {/* thanh tìm kiếm */}
        <div className="t-right search-bar-wrapper w-100">
          <div className="search-bar pos-relative">
            <AutoComplete
              className="trans-center w-100"
              options={options}

              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }>
              <Input
                maxLength={200}
                size={'large'}
                placeholder={'Tìm kiếm'}
              />
            </AutoComplete>
            <Button type="primary" size={'large'}>
              <Link to='/'>
                <SearchOutlined /> {'Tìm kiếm'}
              </Link>
            </Button>
          </div>
        </div>

        {/* thanh công cụ navbar */}

        <ul className="d-flex m-0">
          <li>
            <Link
              className="d-flex flex-direction-column navbar-tool-item p-l-0"
              to={ROUTES.ACCOUNT + '/orders'}>
              <ReconciliationOutlined className="icon" />
              <span className="title">Đơn hàng</span>
            </Link>
          </li>
          <li>
            <Dropdown overlay={userActionMenu} placement="bottomRight">

              {!isAuth ? (
                <Link to={ROUTES.SIGNIN}>
                  <div className="d-flex flex-direction-column navbar-tool-item">
                    <UserOutlined className="icon" />
                    <span className="title">Đăng nhập</span>
                  </div>
                </Link>

              ) : (
                <Link to={ROUTES.ACCOUNT}>
                  <div className="d-flex flex-direction-column navbar-tool-item">
                    <Avatar src={defaultAvt} className="m-auto" />
                    <span className="title">
                      {reduceProductName(user.name, 12)}
                    </span>
                  </div>
                </Link>
              )}
            </Dropdown>
          </li>
          <li>
            <Dropdown
              overlay={<Cart list={carts} />}
              placement="bottomRight"
              arrow>
              <Link
                className="d-flex flex-direction-column navbar-tool-item"
                to={ROUTES.CART}>
                <ShoppingCartOutlined className="icon" />
                <Badge
                  className="pos-absolute"
                  size="default"
                  style={{ color: '#fff' }}
                  count={totalItemCarts(carts)}
                  overflowCount={9}
                  offset={[36, -5]}
                />

                <span className="title">Giỏ hàng</span>
              </Link>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div >
  );
}

export default Header;
