import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./dynamic-map"), {
  ssr: false,
});

const Map = (props: any) => {
  return (
    <div style={{ aspectRatio: 1 }}>
      <DynamicMap {...props} />
    </div>
  );
};

export default Map;
