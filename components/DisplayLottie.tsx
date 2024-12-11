// import React from "react";
// import Lottie from "react-lottie";

// type Props = {
//   animationPath: string;
// };

// const GreetingLottie = ({ animationPath }: Props) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     path: animationPath,
//   };

//   return (
//     <div onClick={() => null}>
//       {/* @ts-ignore */}
//       <Lottie options={defaultOptions} />
//     </div>
//   );
// };

// export default GreetingLottie;


import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
