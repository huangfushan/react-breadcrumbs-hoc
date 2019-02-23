# 介绍
* 基于react-router-breadcrumbs-hoc封装的面包屑组件
* 项目上传在github，未在npm站点维护，故引用的时候无法通过npm按照

# 引用
* 在 `package.json` 文件中的 `dependencies` 添加如下代码:
  ```
  "react-breadcrumbs-hoc": "https://github.com/huangfushan/react-breadcrumbs-hoc.git"
  ```
* npm install

# 使用
* 在不传参数的情况下，默认会引用路由作为面包屑路径，且如果是单词首字母会自动大写。
  ```
    import React from 'react';
    import ReactBreadcrumbsHOC from 'react-breadcrumbs-hoc';
    
    class Comp extends React.Component {
      render() {
        return (
          <div className="App">
            <div>
              <p>{i18n.COMMON.USERNAME}</p>
            </div>
          </div>
        );
      }
    }
  
    export default ReactBreadcrumbsHOC()(Comp);
  ```
* `react-breadcrumbs-hoc` 接收两个参数
    * 第一参数是个对象数组
    * 第二参数是个boolean值，默认true，即会展示根目录对应的link连接。设为false即不展示。
    * 在需要调用的的组件中
    ```
      import React from 'react';
      import ReactBreadcrumbsHOC from 'react-breadcrumbs-hoc';
    
      const routes = [
        { path: '/', breadcrumbs: '首页' },
        { path: '/user', breadcrumbs: '用户' },
      ]
  
      class Comp extends React.Component {
        render() {
          return (
            <div className="App">
              <div>
                <p>{i18n.COMMON.USERNAME}</p>
              </div>
            </div>
          );
        }
      }
  
      export default ReactBreadcrumbsHOC(routes, false)(Comp);
    ```
