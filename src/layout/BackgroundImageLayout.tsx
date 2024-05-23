import { PropsWithChildren } from "react";

const BackgroundImageLayout = (props: PropsWithChildren) => {
  return (
    <main
      className="bg-black box-border bg-cover flex text-white flex-col h-[100%] p-3 subpixel-antialiased font-mono
                  md:p-10
    "
    >
      {props.children}
    </main>
  );
};

export default BackgroundImageLayout;
