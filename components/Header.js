import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import styles from 'styles/header.module.scss'
const items = [
  {
    label: 'Navigation1',
    key: 'menu1',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'menu1-setting:1',
          },
          {
            label: 'Option 2',
            key: 'menu1-setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'menu1-setting:3',
          },
          {
            label: 'Option 4',
            key: 'menu1-setting:4',
          },
        ],
      },
    ],
  },
  {
    label: 'Navigation2',
    key: 'menu2',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'menu2-setting:1',
          },
          {
            label: 'Option 2',
            key: 'menu2-setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'menu2-setting:3',
          },
          {
            label: 'Option 4',
            key: 'menu2-setting:4',
          },
        ],
      },
    ],
  }
];
const Header = () => {
  const [current, setCurrent] = useState('SubMenu');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <div className={styles.container}>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  </div>
  };
export default Header;
