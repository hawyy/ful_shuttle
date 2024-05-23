import { PropsWithChildren } from "react";

const BackgroundImageLayout = (props: PropsWithChildren) => {
  return (
    <main
      className="bg-main-background bg-cover flex text-white flex-col h-screen p-10
    subpixel-antialiased font-mono
    "
    >
      {props.children}
    </main>
  );
};

export default BackgroundImageLayout;
