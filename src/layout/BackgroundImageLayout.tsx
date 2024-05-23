import { PropsWithChildren } from "react";

const BackgroundImageLayout = (props: PropsWithChildren) => {
  return (
    <main
      className="bg-black box-border bg-cover flex text-white flex-col h-full p-10 subpixel-antialiased font-mono
    "
    >
      {props.children}
    </main>
  );
};

export default BackgroundImageLayout;
