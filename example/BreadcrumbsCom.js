/**
 * 面包屑组件
 * @Author: huangfushan
 * @Date: 2019-02-23
 * @Project: react-breadcrumbs-hoc
 */


import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

class Breadcrumbs extends React.Component {

  getCrumbRender() {
    const { breadcrumbs, hasShowHomepage } = this.props;
    const crumbRender = breadcrumbs.map((item, index) => {
      if (index === 0 && !hasShowHomepage) return null;
      if (index === breadcrumbs.length - 1) return item;
      if (index && !item.props.hascomponent) return (
        React.createElement('span', { key: index },
          React.createElement('span', null, item),
          React.createElement('i', null, ' / '),
        )
      );
      return (
        React.createElement('span', { key: index },
          React.createElement(Link, { to: item.props.match.url }, item),
          (index < breadcrumbs.length - 1) && React.createElement('i', null, ' / '),
        )
      );
    });
    return React.createElement('div', { className: 'breadcrumbs-hoc' }, crumbRender, React.createElement('div'));
  }

  render() {
    return this.getCrumbRender();
  }
}

const BreadcrumbsCom = ({ routers = [], hasShowHomepage = true }) => {
  const newRouter = routers.map((item = {}) => ({
    path: item.path,
    breadcrumb: item.name,
    hascomponent: item.component ? 1 : 0
  }));
  const Com = withBreadcrumbs(newRouter)(Breadcrumbs);
  return <Com hasShowHomepage={hasShowHomepage} />;
};

export default BreadcrumbsCom;

