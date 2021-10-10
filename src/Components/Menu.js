import './Menu.css';

const Menu = (actions) => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') actions.onPlayClick(true);
  });
  alert('Here is one bug. Remember, this is first version');
  return (
    <div className="menu">
      <h1>Snake</h1>
      <button
        onClick={() => {
          actions.onPlayClick(true);
        }}
      >
        Play
      </button>
      <p>Press enter to start play</p>
      <div className="snake">:</div>
    </div>
  );
};

export default Menu;
