import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./dynamic-map"), {
  ssr: false,
});

const Map = (props: any) => {
  return (
    <div style={{ aspectRatio: 1 }}>
      <div className="absolute left-0 z-[500] w-96 transition-transform h-full bg-black">
        <div className="overflow-hidden relative h-full">heh</div>
      </div>
      <DynamicMap {...props} />
    </div>
  );
};

export default Map;
