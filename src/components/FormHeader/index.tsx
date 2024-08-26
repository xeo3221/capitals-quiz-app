import { LogoGithub } from "react-ionicons";
import background from "../../assets/images/bg.jpg";

export const FromHeader = () => {
  return (
    <div className="w-full flex items-center justify-center relative rounded-xl">
      <div className="absolute top-5 left-5 z-10 flex items-center gap-3">
        <a
          href="https://github.com/xeo3221/capitals-quiz-app"
          target="_blank"
          rel="noreferrer"
        >
          <LogoGithub
            color={"#fff"}
            title={"Github"}
            height="25px"
            width="25px"
            cssClasses={"cursor-pointer"}
          />
        </a>
      </div>
      <span className="text-3xl text-center text-white font-medium absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 rounded-tl-[10px] z-50">
        Capitals Quiz App
      </span>
      <img
        src={background}
        className="w-full h-48 rounded-tr-xl rounded-tl-xl"
        alt="Quiz App"
      />
      <div className="w-full h-full absolute bg-[rgba(54,84,99,0.7)] rounded-tr-xl rounded-tl-xl"></div>
    </div>
  );
};
