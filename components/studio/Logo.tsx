import Image from "next/image";
export default function Logo(props: any) {
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://links.papareact.com/1m8"
        alt="logo"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
}
