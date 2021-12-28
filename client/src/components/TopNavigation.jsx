import React from 'react';

const TopNavigation = () => {
  const navigation = [
    {
      name: 'React Hook Docs',
      href: 'https://reactjs.org/docs/hooks-intro.html',
    },
    {
      name: 'Clone This Repo',
      href: 'https://github.com/journeycruz/react-hooks',
    },
  ];

  return (
    <header className='navbar-top'>
      <div className='space-between'>
        <div className='logo montserrat-bold'>React Hook Practice Exercies</div>
        <div className='nav'>
          {navigation.map((item, i) => (
            <div key={i} className='nav-links raleway-light'>
              <a className='nav-item' href={item.href} target='_blank' rel='noreferrer'>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
