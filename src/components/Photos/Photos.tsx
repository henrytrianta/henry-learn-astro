import type { JSX } from "solid-js/jsx-runtime";

const PhotosWrapper = (props: {
  imageIndex: number;
  children: JSX.Element;
}) => {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div
      class={`
    relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${
      rotations[props.imageIndex % rotations.length]
    }`}
    >
      {props.children}
    </div>
  );
};

const Photos = (props: { children: JSX.Element }) => {
  return (
    <div class="mt-16 sm:mt-20">
      <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {props.children}
      </div>
    </div>
  );
};

Photos.Wrapper = PhotosWrapper;

export default Photos;
