import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";
import DateComponent from "@/app/components/Date";

type Props = {
  person: {
    name: string | null;
    image?: any;
    role?: string | null;
  };
  date: string;
};

export default function Avatar({ person, date }: Props) {
  const { name, image, role } = person;

  return (
    <div className="flex items-center">
      {image?.asset?._ref ? (
        <div className="mr-4 h-9 w-9">
          <Image
            alt={image?.alt || ""}
            className="h-full rounded-full object-cover"
            height={48}
            width={48}
            src={
              urlForImage(image)
                ?.height(96)
                .width(96)
                .fit("crop")
                .url() as string
            }
          />
        </div>
      ) : (
        <div className="mr-1">By </div>
      )}
      <div className="flex flex-col">
        {name && (
          <div className="font-bold">
            {name}
            {role && <span className="font-normal text-gray-500 text-sm ml-2">({role})</span>}
          </div>
        )}
        <div className="text-gray-500 text-sm">
          <DateComponent dateString={date} />
        </div>
      </div>
    </div>
  );
}
