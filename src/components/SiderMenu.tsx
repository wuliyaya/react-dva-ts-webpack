import React, { PureComponent, Fragment } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'dva/router';
import styles from './SiderMenu.less';

console.log(styles.logo);
const { Sider } = Layout;
// const { SubMenu } = Menu;

export interface ISilderMenuProps {}

export default class SilderMenu extends PureComponent<ISilderMenuProps> {
  private constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  private getNavMenuItems() {
    return;
  }

  public render() {
    let collapsed;
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        width={208}
        collapsedWidth={64}
        className={styles.sider}
      >
        <Fragment>
          <div className={styles.logo} key="logo">
            <Link to={'/home'}>
              <img src="" alt="logo" />
            </Link>
            <i
              // className={collapsed ? styles.collapseOpen : styles.collapseClose}
              onClick={() => {}}
            />
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            {this.getNavMenuItems()}
            {/* <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Navigation Two</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu> */}
          </Menu>
        </Fragment>
      </Sider>
    );
  }
}