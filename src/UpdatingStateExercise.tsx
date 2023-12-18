// Updating State Exercise
// - Using the following starter code, update the name of player in the game object "onClick" to anything else.
// Here is your starter code:

const Component = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Dylan",
    },
  });

  const handleClick = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player: {
        ...prevGame.player,
        name: "New Name",
      },
    }));
  };

  return (
    <div>
      <h1>PName: {game.player.name}</h1>
      <button onClick={handleClick}>Confirm</button>
    </div>
  );
};

export default Component;
