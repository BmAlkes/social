import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {}

export default function AccountPreview({}: Props) {
  return (
    <div className="hidden w-[320px] rounded-[10px] bg-[#333] p-4 lg:block">
      <div className="flex items-center justify-between">
        <div className="mr-3 h-10 w-10">
          <LazyLoadImage className="rounded-full" effect="opacity" />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="line-clamp-1 mt-[-2px] flex items-center text-[16px] font-bold">
          @username
        </h3>
        <p className="line-clamp-1 text-[12px] text-[rgba(255,255,255,0.75)]">
          name
        </p>
      </div>
      <div className="mt-4 flex items-center">
        <div className="flex items-center">
          <p className="font-semibold">0</p>
          <p className="ml-1 text-[rgba(255,255,255,0.75)]">Followers</p>
        </div>
        <div className="ml-3 flex items-center">
          <p className="font-semibold">0</p>
          <p className="ml-1 text-[rgba(255,255,255,0.75)]">Following</p>
        </div>
      </div>
    </div>
  );
}
