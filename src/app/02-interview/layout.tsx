import {PropsWithChildren} from 'react';
import './styles.css';

function InterviewLayout({ children } :PropsWithChildren) {
  return (
    <>
      <main>{children}</main>
      <footer className="site-footer">
        Copyright Whatever © 2010-present. All
        rights reserved.
      </footer>
    </>
  );
}

export default InterviewLayout;
