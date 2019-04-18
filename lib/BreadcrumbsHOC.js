/**
 * 面包屑
 * @Author: huangfushan
 * @Date: 2019-02-23
 * @Project: react-breadcrumbs-hoc
 */


import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const BreadCrumbsHOC = (router = [], homepageHasShow = true) => WrappedComponent => {
  const compDisplayName = `breadcrumbs(${getDisplayName(WrappedComponent)})`;
  const newRouter = router.map((item = {}) => ({ path: item.path, breadcrumb: item.breadcrumb, hascomponent: item.component ? 1 : 0 }));

  class Breadcrumbs extends React.Component {

    componentWillMount() {
      if (process.env.NODE_ENV !== 'production' && typeof homepageHasShow !== 'boolean'){
        console.error(compDisplayName + ': The second parameter should be a boolean')
      }
    }

    getCrumbRender() {
      const { breadcrumbs } = this.props;
      const crumbRender = breadcrumbs.map((item, index) => {
        if (index === 0 && !homepageHasShow) return null;
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
      return React.createElement('div', { className: 'breadcrumbs-hoc' }, crumbRender, React.createElement('div'),React.createElement(WrappedComponent, this.props))
    }

    render() {
      return this.getCrumbRender();
    }
  }

  Breadcrumbs.displayName = compDisplayName;
  Breadcrumbs.WrappedComponent = WrappedComponent;

  return withBreadcrumbs(newRouter)(Breadcrumbs);
};

export default BreadCrumbsHOC;

