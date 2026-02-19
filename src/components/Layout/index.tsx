import { type ReactNode } from 'react';
import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Main>
          {children}
        </Main>
      </div>
    </>
  );
}