import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import './portal.scss';

const Portal = ({ children }: { children?: React.ReactNode }) => {
  const $ = (selector: string) => document.getElementById(selector);
  const $modalRoot = $('portal-root') as HTMLDivElement;

  const el = document.createElement('div');
  useEffect(() => {
    $modalRoot.appendChild(el);
    return () => {
      $modalRoot.removeChild(el);
    };
  }, [el]);
  return ReactDOM.createPortal(children, el);
};

export { Portal };
