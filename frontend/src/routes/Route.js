import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { isAuthenticated, url } from '../services/auth';
import useStyles from './styles';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (isPrivate) {
      // eslint-disable-next-line consistent-return
      isAuthenticated().then((res) => {
        setAuthenticated(res);

        if (!res && isPrivate) {
          const loginUrl = `${url}/auth/login/`;
          // TODO:
          // Este if é para quando o usuario tem um link para uma url especifica do app com parametros
          // e tenta acessar mais ainda não está logado.
          // No Django é o parametro next.
          // Depois do login ele redireciona para onde o usuario tentou acessar.
          // O Router não me passa esse valor, se o usuario tentou acessar uma url,
          // sem estar logado o router direcionou ele para o /login mas não passa  a url de origem.
          let next = '/';
          if (window.location.pathname !== '/login') {
            next = window.location.pathname + window.location.search;
          }
          return window.location.replace(`${loginUrl}?next=${next}`);
        }
      });
    } else {
      setAuthenticated(true);
    }
  }, [isPrivate]);

  // return <Route {...rest} render={(props) => <Component {...props} />} />;

  return (
    <>
      {!authenticated ? (
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Route {...rest} render={(props) => <Component {...props} />} />
      )}
    </>
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
