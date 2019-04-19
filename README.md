# 介绍
* 基于react-router-breadcrumbs-hoc封装的面包屑组件
* 项目上传在github，未在npm站点维护，故引用的时候无法通过npm安装

# 引用
* 在 `package.json` 文件中的 `dependencies` 添加如下代码:
  ```
  "react-breadcrumbs-hoc": "git+ssh://github@github.com:huangfushan/react-breadcrumbs-hoc.git",
  ```
  或者
  ```
  "react-dt-breadcrumbs": "git+ssh://git@git.dayukeji.xin:open/npm/react-dt-breadcrumbs.git",
  ```
* npm install

# 使用
* 提供两个api，breadcrumbs，作为高阶组件引用，BreadcrumbsCom作为普通组件引用
* 在不传参数的情况下，默认会引用路由作为面包屑路径，且如果是单词首字母会自动大写。
  ```
    import React from 'react';
    import { breadcrumbs } from 'react-breadcrumbs-hoc';
    
    class Comp extends React.Component {
      render() {
        return (
          <div className="App">
            <div>
              <p>首页</p>
            </div>
          </div>
        );
      }
    }
  
    export default breadcrumbs()(Comp);
  ```
* `react-breadcrumbs-hoc` 接收两个参数
    * 第一参数是个对象数组
    * 第二参数是个boolean值，默认true，即会展示根目录对应的link连接。设为false即不展示。
    * 在需要调用的的组件中
    ```
      import React from 'react';
      import { breadcrumbs, BreadcrumbsCom } from 'react-breadcrumbs-hoc';
    
      const routes = [
        { path: '/', breadcrumbs: '首页' },
        { path: '/user', breadcrumbs: '用户' },
      ]
  
      class Comp extends React.Component {
        render() {
          return (
            <div className="App">
              <div>
                <p>首页</p>
              </div>
            </div>
          );
        }
      }
  
      export default breadcrumbs(routes, false)(Comp);
    ```
    
    ```
      import React from 'react';
      import { breadcrumbs } from 'react-breadcrumbs-hoc';
    
      const routes = [
        { path: '/', breadcrumbs: '首页' },
        { path: '/user', breadcrumbs: '用户' },
      ]
  
      class Comp extends React.Component {
        render() {
          return (
            <div className="App">
              <div>
                <p>首页</p>
                <BreadcrumbsCom routers={routes}, hasShowHomepage={true}/>
              </div>
            </div>
          );
        }
      }
  
      export default Comp;
    ```
