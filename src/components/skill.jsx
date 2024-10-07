// eslint-disable-next-line react/prop-types
const Skill = ({ src, name }) => {
  return (
    <>
      <div className="skill">
        <img src={src} />
        <p className="dark:text-gray-300">{name}</p>
      </div>
    </>
  );
};

export default Skill;
