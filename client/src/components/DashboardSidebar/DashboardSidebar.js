import React from "react";

const style = {
  sidenav: {
    background: '#F2F2F2',
    zIndex: '1',
    overflowX: 'hidden',
    height: '100%',
    width: '18%',
    position: 'fixed',
    top: '0',
    left: '0'
  },
  sidenavText: {
    fontFamily: 'Roboto-Regular',
    fontSize: '18px',
    color: '#666666',
    letterSpacing: '-0.04px',
    display:'block',
    textAlign: 'left',
    paddingBottom: '20px'
  }
}

export const DashboardSidebar = props => (
  <div className="sidenav" style={style.sidenav}>
    <a href="/dashboard/templates" style={style.sidenavText}>Templates</a>
    <a href="/dashboard/myportfolio" style={style.sidenavText}>My Portfolio</a>
    <a href="#" style={style.sidenavText}>Git Pinned Repos</a>
    <a href="/dashboard/edit" style={style.sidenavText}>Edit Portfolio</a>
    <a href="/" style={style.sidenavText}>Logout</a>  
  </div>
);



