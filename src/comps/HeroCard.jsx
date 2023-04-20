export default function HeroCard(props) {
  console.log(props);
  return (
    <div className="group h-52 w-52 md:h-60 md:w-60 m-5 mt-10 relative">
      <div className="bg-[#37316f] h-full w-full rounded-md absolute">
        <a href={"mailTo:" + props.hero.email} target="_blank" rel="noreferrer">
          <img
            src="./mailIcon.svg"
            alt="mail"
            className="h-6 w-6 right-2 top-1/3 absolute"
          />
        </a>
        <div className="absolute text-sm text-green-200 bottom-1 text-center w-full text-ellipsis">
          {props.hero.name}
        </div>
      </div>
      <div className="bg-blue-200 h-full w-full flex rounded-md absolute group-hover:-translate-x-9 group-hover:-translate-y-9 transition-all duration-300">
        <img
          src={
            props.hero.img ? props.hero.img : "https://i.imgur.com/VfzpNHY.png"
          }
          alt="headshot"
          className="h-5/6 w-5/6 m-auto"
        />
      </div>
      <div className="-bottom-4 absolute text-center h-4 w-full text-[#37316f]">
        {props.hero.role}
      </div>
    </div>
  );
}
