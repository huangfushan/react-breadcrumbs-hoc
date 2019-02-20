/**
 * 面包屑
 * @Author: huangfs
 * @Date: 2019-01-28
 * @Project: cms-common
 */


import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

const BreadCrumbHOC = (router = []) => {
  const newRouter = router.map((item = {}) => ({ path: item.path, breadcrumb: item.breadcrumb }));
  return WrappedComponent => {
    class Breadcrumbs extends React.PureComponent {
      render() {
        const { breadcrumbs } = this.props;
        return (
          <div>
            {
              breadcrumbs.map((breadcrumb, index) => {
                  if (index === 0) return null;
                  if (index === breadcrumbs.length - 1) return breadcrumb;
                  return (
                    <span key={index}>
                      <Link to={breadcrumb.props.match.url}>{breadcrumb}</Link>
                      {
                        (index < breadcrumbs.length - 1) && <i> / </i>
                      }
                    </span>
                  );
                }
              )
            }
            <WrappedComponent {...this.props} />
          </div>
        );
      }
    }

    return withBreadcrumbs(newRouter)(Breadcrumbs);
  };
};
export default BreadCrumbHOC;

